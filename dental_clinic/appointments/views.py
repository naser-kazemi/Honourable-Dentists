from django.utils import timezone
from rest_framework import generics, permissions
from django_filters import rest_framework as filters
from .serializers import AppointmentReadSerializer, AppointmentWriteSerializer, AppointmentListSerializer
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import AppointmentForm
from .models import Appointment, Service, User
import django_filters

from users.views import CURRENT_USER


class IsDentist(permissions.BasePermission):
    def has_permission(self, request, view):
        print(CURRENT_USER, CURRENT_USER['user'].is_dentist)
        return CURRENT_USER and CURRENT_USER['user'].is_dentist and CURRENT_USER['is_logged_in']


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
        if self. request.user.is_anonymous:
            self.request.user = CURRENT_USER['user']
        serializer.save(patient=self.request.user)


class TodayAppointmentListView(generics.ListAPIView):
    serializer_class = AppointmentListSerializer
    permission_classes = [IsDentist]

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        today = timezone.now().date()
        return Appointment.objects.filter(date=today, dentist=self.request.user)


class AppointmentListView(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentListSerializer
    permission_classes = [IsDentist]
    filterset_class = AppointmentFilter

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        if self.request.user.is_dentist:
            return Appointment.objects.filter(dentist=self.request.user)
        return Appointment.objects.none()


class AppointmentUpdateView(generics.UpdateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentWriteSerializer
    permission_classes = [IsDentist]

    def get_queryset(self):
        self.request.user = CURRENT_USER['user']
        if self.request.user.is_dentist:
            return Appointment.objects.filter(dentist=self.request.user)
        return Appointment.objects.none()


@login_required
def create_appointment(request):
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
