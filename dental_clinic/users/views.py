from copy import deepcopy

from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.http import HttpResponseForbidden
from django.core.exceptions import ValidationError
from django.views import View
from rest_framework import generics, status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.conf import settings
from .models import User, PatientProfile, DentistProfile, TechnicianProfile
from imaging_center.models import RadiologyImage
from .serializers import UserSerializer, PatientProfileSerializer, DentistProfileSerializer
from dental_clinic.utils import get_geocode
from .validators import validate_password
from .forms import (PatientRegistrationForm,
                    DentistRegistrationForm,
                    UserRegistrationForm,
                    TechnicianRegistrationForm,
                    CustomLoginForm)
from imaging_center.forms import RadiologyImageForm
from .validators import validate_password
from django.contrib.auth.views import LoginView

from datetime import datetime


# Create your views here.

class PatientProfileListCreateView(generics.ListCreateAPIView):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer


class DentistProfileListCreateView(generics.ListCreateAPIView):
    queryset = DentistProfile.objects.all()
    serializer_class = DentistProfileSerializer


CURRENT_USER = {'user': User(), 'is_logged_in': False}


@api_view(['POST'])
def update_geocode(request):
    user = request.user
    address = request.data.get('address')

    if not address:
        return Response({'error': 'Address is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        latitude, longitude = get_geocode(address, settings.NESHAN_API_KEY)
        user.latitude = latitude
        user.longitude = longitude
        user.save()
        return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def create_user_from_form(request):
    data = request.data

    print("\n=============================================")
    print(data)
    print("=============================================\n")

    password = data.get('password')
    password_repeat = data.get('password_repeat')
    try:
        validate_password(password, password_repeat)
    except ValidationError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create(
        first_name=data['first_name'],
        last_name=data['last_name'],
        username=data['username'],
        province=data['province'],
        city=data['city'],
        address=data['address'],
        phone_number=data['phone_number'],
        is_patient=data['is_patient'],
    )

    user.set_password(password)

    if user.is_patient:
        birth_date = data['birth_date']
        birth_date = birth_date.split('T')[0]
        PatientProfile.objects.create(user=user, national_id=data['national_id'], birth_date=birth_date)

    if user.is_dentist:
        DentistProfile.objects.create(user=user, phone_number=data['phone_number'],
                                      medical_council_number=data['medical_council_number'])

    # print the user
    print(f"User created: {user}")

    if user.address:
        try:
            latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
            user.latitude = latitude
            user.longitude = longitude
            user.save()
        except ValueError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

    return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)


def register_patient(request):
    if request.method == 'POST':
        form = PatientRegistrationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            password = data.get('password')
            password_repeat = data.get('password_repeat')
            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                form.add_error('password', e)
                return render(request, 'register_patient.html', {'form': form})

            user = User.objects.create(
                username=data['username'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                address=data['address'],
                province=data['province'],
                city=data['city'],
                phone_number=data['phone_number'],
                is_patient=True,
                is_dentist=False
            )

            user.set_password(password)
            user.save()

            PatientProfile.objects.create(
                user=user,
                national_id=data['national_id'],
                birth_date=data['birth_date']
            )

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                    user.save()
                except ValueError as e:
                    messages.error(request, str(e))
                    return render(request, 'register_patient.html', {'form': form})

            messages.success(request, 'Patient registered successfully!')
            return redirect('register-patient')
    else:
        form = PatientRegistrationForm()
    return render(request, 'register_patient.html', {'form': form})


def register_dentist(request):
    if request.method == 'POST':
        form = DentistRegistrationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            password = data.get('password')
            password_repeat = data.get('password_repeat')
            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                form.add_error('password', e)
                return render(request, 'register_dentist.html', {'form': form})

            user = User.objects.create(
                username=data['username'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                address=data['address'],
                province=data['province'],
                city=data['city'],
                phone_number=data['phone_number'],
                is_patient=False,
                is_dentist=True
            )

            user.set_password(password)
            user.save()

            DentistProfile.objects.create(
                user=user,
                medical_council_number=data['medical_council_number'],
                email=data['email']
            )

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                    user.save()
                except ValueError as e:
                    messages.error(request, str(e))
                    return render(request, 'register_dentist.html', {'form': form})

            messages.success(request, 'Dentist registered successfully!')
            return redirect('register-dentist')
    else:
        form = DentistRegistrationForm()
    return render(request, 'register_dentist.html', {'form': form})


def register_technician(request):
    if request.method == 'POST':
        form = TechnicianRegistrationForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            password = data.get('password')
            password_repeat = data.get('password_repeat')

            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                form.add_error('password', e)
                return render(request, 'register_dentist.html', {'form': form})

            user = User.objects.create(
                username=data['username'],
                email=data['email'],
                first_name=data['first_name'],
                last_name=data['last_name'],
                address=data['address'],
                province=data['province'],
                city=data['city'],
                phone_number=data['phone_number'],
            )

            user.is_technician = True
            user.set_password(password)
            user.save()
            TechnicianProfile.objects.create(user=user,
                                             certification_number=form.cleaned_data.get('certification_number'),
                                             email=form.cleaned_data.get('email'))
            messages.success(request, 'Technician registered successfully!')

            return redirect('register_technician.html')
    else:
        form = TechnicianRegistrationForm()
    return render(request, 'register_technician.html', {'form': form})


class CustomLoginView(View):
    form_class = CustomLoginForm
    template_name = 'login.html'

    def get(self, request, *args, **kwargs):
        form = self.form_class()
        return render(request, self.template_name, {'form': form})

    def post(self, request, *args, **kwargs):
        form = self.form_class(request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=username, password=password)
            if user is not None and check_password(password, user.password):
                print("\n=====================")
                print(user, user.is_dentist)
                print("=====================\n")
                global CURRENT_USER
                CURRENT_USER['user'] = deepcopy(user)
                CURRENT_USER['is_logged_in'] = True
                login(request, user)
                if user.is_patient:
                    print("the user is a patient")
                    return redirect('patient_dashboard')
                elif user.is_dentist:
                    print("the user is a dentist")
                    return redirect('dentist_dashboard')
                elif user.is_technician:
                    print("the user is a technician")
                    return redirect('technician_dashboard')
            else:
                form.add_error(None, 'Invalid username or password.')

        return render(request, self.template_name, {'form': form})


@login_required
def patient_dashboard(request):
    return render(request, 'patient_dashboard.html')


@login_required
def dentist_dashboard(request):
    return render(request, 'dentist_dashboard.html')


@login_required
def upload_image(request):
    if not request.user.is_technician:
        return HttpResponseForbidden("You are not authorized to upload images.")

    if request.method == 'POST':
        form = RadiologyImageForm(request.POST, request.FILES)
        if form.is_valid():
            radiology_image = form.save(commit=False)
            radiology_image.technician = request.user
            patient_id = form.cleaned_data['user_id']
            patient = get_object_or_404(PatientProfile, id=patient_id)
            radiology_image.patient = patient
            radiology_image.save()
            return redirect('some_view')
    else:
        form = RadiologyImageForm()
    return render(request, 'upload_image.html', {'form': form})
