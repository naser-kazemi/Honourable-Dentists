import json

from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, permissions, status
from django_filters import rest_framework as filters
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import AppointmentReadSerializer, AppointmentWriteSerializer, AppointmentListSerializer
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import AppointmentForm
from .models import Appointment, Service, User
import django_filters

from users.views import CURRENT_USER

from users.models import PatientProfile, DentistProfile


class IsDentist(permissions.BasePermission):
    def has_permission(self, request, view):
        print(CURRENT_USER, CURRENT_USER['user'].is_dentist)
        return CURRENT_USER and CURRENT_USER['user'].is_dentist and CURRENT_USER['is_logged_in']


class IsPatient(permissions.BasePermission):
    def has_permission(self, request, view):
        print(CURRENT_USER, CURRENT_USER['user'].is_patient)
        return CURRENT_USER and CURRENT_USER['user'].is_patient and CURRENT_USER['is_logged_in']


class AppointmentFilter(django_filters.FilterSet):
    date = django_filters.DateFilter(field_name='date')
    start_date = django_filters.DateFilter(field_name='date', lookup_expr='gte')
    end_date = django_filters.DateFilter(field_name='date', lookup_expr='lte')
    status = django_filters.ChoiceFilter(choices=Appointment.STATUS_CHOICES)
    dentist = django_filters.ModelChoiceFilter(queryset=Appointment.objects.filter(dentist__is_dentist=True))
    patient = django_filters.ModelChoiceFilter(queryset=Appointment.objects.filter(patient__is_patient=True))

    class Meta:
        model = Appointment
        fields = ['date', 'status', 'dentist', 'patient']


class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    filterset_class = AppointmentFilter

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return AppointmentWriteSerializer
        return AppointmentReadSerializer

    def perform_create(self, serializer):
        if self.request.user.is_anonymous:
            self.request.user = CURRENT_USER['user']
        serializer.save(patient=self.request.user)


class AppointmentUpdateView(generics.UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentWriteSerializer

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        if self.request.user.is_dentist:
            return Appointment.objects.filter(dentist=self.request.user)
        return Appointment.objects.none()


@login_required
def create_appointment_form(request):
    if request.user.is_anonymous:
        request.user = CURRENT_USER['user']
    if request.method == 'POST':
        form = AppointmentForm(request.POST, patient=request.user)
        if form.is_valid():
            appointment = form.save(commit=False)
            appointment.patient = request.user
            appointment.save()
            return redirect('appointment_success')
    else:
        form = AppointmentForm(patient=request.user)
    return render(request, './templates/create_appointment.html', {'form': form})


@login_required
def appointment_success(request):
    return render(request, './templates/appointment_success.html')


class PatientAppointmentsView(APIView):
    # permission_classes = [permissions.IsAuthenticated, IsPatient]

    def get(self, request, *args, **kwargs):
        today = timezone.localdate()
        appointments = Appointment.objects.filter(patient=request.user, date__gt=today)
        serializer = AppointmentReadSerializer(appointments, many=True)
        data = serializer.data
        for i in range(len(data)):
            dentist = User.objects.get(user_id=data[i]['dentist'])
            data[i]['dentist'] = f"Dr. {dentist.first_name} {dentist.last_name}"
            dentist_profile = DentistProfile.objects.get(user=dentist)
            data[i]['speciality'] = f"{dentist_profile.speciality}"
        return Response(data)


class PatientPreviousAppointmentsView(APIView):
    # permission_classes = [permissions.IsAuthenticated, IsPatient]

    def get(self, request, *args, **kwargs):
        today = timezone.localdate()
        appointments = Appointment.objects.filter(patient=request.user, date__lt=today)
        serializer = AppointmentReadSerializer(appointments, many=True)
        data = serializer.data
        for i in range(len(data)):
            dentist = User.objects.get(user_id=data[i]['dentist'])
            data[i]['dentist'] = f"Dr. {dentist.first_name} {dentist.last_name}"
            dentist_profile = DentistProfile.objects.get(user=dentist)
            data[i]['speciality'] = f"{dentist_profile.speciality}"
        return Response(data)


class PatientTodaysAppointmentsView(APIView):
    # permission_classes = [permissions.IsAuthenticated, IsPatient]

    def get(self, request, *args, **kwargs):
        today = timezone.localdate()
        appointments = Appointment.objects.filter(patient=request.user, date=today)
        serializer = AppointmentReadSerializer(appointments, many=True)
        data = serializer.data
        for i in range(len(data)):
            dentist = User.objects.get(user_id=data[i]['dentist'])
            data[i]['dentist'] = f"Dr. {dentist.first_name} {dentist.last_name}"
            dentist_profile = DentistProfile.objects.get(user=dentist)
            data[i]['speciality'] = f"{dentist_profile.speciality}"
        return Response(data)


class DentistTodayAppointmentListView(generics.ListAPIView):
    serializer_class = AppointmentListSerializer
    permission_classes = [IsDentist]

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        today = timezone.now().date()
        return Appointment.objects.filter(date=today, dentist=self.request.user)


class DentistAppointmentListView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentListSerializer
    permission_classes = [IsDentist]
    filterset_class = AppointmentFilter

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        if self.request.user.is_dentist:
            return Appointment.objects.filter(dentist=self.request.user)
        return Appointment.objects.none()


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def create_appointment(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print(data)
            user = request.user
            dentist_username = data.get('dentist')
            service_id = data.get('service')

            dentist = User.objects.get(username=dentist_username)
            service = Service.objects.get(id=service_id)

            Appointment.objects.create(
                patient=user,
                dentist=dentist,
                service=service,
                date=data.get('date'),
                time=data.get('time'),
                description=data.get('description', ''),
                pain_level=data.get('pain_level', 1)
            )

            return Response({'message': 'Appointment created successfully!'}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
