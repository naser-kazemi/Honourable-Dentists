import json
from copy import deepcopy

from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.hashers import check_password
from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from django.http import HttpResponseForbidden
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework import generics, status, permissions
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from rest_framework.renderers import TemplateHTMLRenderer, JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, renderer_classes
from django.conf import settings
from rest_framework.views import APIView
from .models import User, PatientProfile, DentistProfile, TechnicianProfile, RadiologyImage
from .serializers import UserSerializer, PatientProfileSerializer, DentistProfileSerializer
from dental_clinic.utils import get_geocode
from .forms import (PatientRegistrationForm,
                    DentistRegistrationForm,
                    UserRegistrationForm,
                    TechnicianRegistrationForm,
                    RadiologyImageForm,
                    CustomLoginForm)
from .validators import *
from django.contrib.auth.views import LoginView

from datetime import datetime


# Create your views here.


class PatientProfileListCreateView(generics.ListCreateAPIView):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            data = serializer.validated_data['user']
            print(data)
            password = data.get('password')
            password_repeat = serializer.validated_data.get('password_repeat')
            validate_password(password, password_repeat)

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', 'تهران'),
                city=data.get('city', 'تهران'),
                phone_number=data.get('phone_number', '+989000000000'),
                is_patient=True,
                is_dentist=False
            )

            user.set_password(password)
            user.save()

            PatientProfile.objects.create(
                user=user,
                national_id=data.get('national_id', '6816545087'),
                birth_date=data.get('birth_date', timezone.now().date())
            )

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                    user.save()
                except ValueError as e:
                    messages.error(request, str(e))
                    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

            messages.success(request, 'Patient registered successfully!')
            headers = self.get_success_headers(serializer.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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


@csrf_exempt
def register_patient_form(request):
    if request.method == 'POST':
        form = PatientRegistrationForm(request.POST)
        print(form)
        if form.is_valid():
            print("0000000000000alsnnaosk[dakmsnljdka[okdfnqpewkv'n;'ewprqfjn;qewrf'")
            data = form.cleaned_data
            print("==================")
            print(data)
            print("==================")
            password = data.get('password')
            password_repeat = data.get('password_repeat')
            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                form.add_error('password', e)
                return render(request, 'register_patient.html', {'form': form})

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', 'تهران'),
                city=data.get('city', 'تهران'),
                phone_number=data.get('phone_number', '+989000000000'),
                is_patient=True,
                is_dentist=False
            )

            user.set_password(password)
            user.save()

            PatientProfile.objects.create(
                user=user,
                national_id=data.get('national_id', '6816545087'),
                birth_date=data.get('birth_date', timezone.now().date())
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


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def register_patient(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            password = data.get('password')
            password_repeat = data.get('password_repeat')
            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                print(e)
                return

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', 'تهران'),
                city=data.get('city', 'تهران'),
                phone_number=data.get('phone_number', '+989000000000'),
                is_patient=True,
                is_dentist=False,
                is_technician=False
            )

            user.set_password(password)
            user.save()

            PatientProfile.objects.create(
                user=user,
                national_id=data.get('national_id', '6816545087'),
                birth_date=data.get('birth_date', timezone.now().date())
            )

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                    user.save()
                except ValueError as e:
                    messages.error(request, str(e))
                    return Response({'message': str(messages)}, status=status.HTTP_201_CREATED)

            print(user)
            messages.success(request, 'Patient registered successfully!')
            return Response({'message': str(messages)}, status=status.HTTP_201_CREATED)
        except:
            messages.error(request, 'Patient was not registered!')
            return Response({'message': str(messages)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def register_dentist(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            password = data.get('password')
            password_repeat = data.get('password_repeat')
            validate_password(password, password_repeat)

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', 'تهران'),
                city=data.get('city', 'تهران'),
                phone_number=data.get('phone_number', '+989000000000'),
                is_patient=False,
                is_dentist=True,
                is_technician=False
            )

            user.set_password(password)
            user.save()

            DentistProfile.objects.create(
                user=user,
                medical_council_number=data.get('medical_council_number', ''),
                email=data.get('email', '')
            )

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                    user.save()
                except ValueError as e:
                    messages.error(request, str(e))
                    return Response({'message': str(messages)}, status=status.HTTP_201_CREATED)

            print(user)
            messages.success(request, 'Dentist registered successfully!')
            return Response({'message': str(messages)}, status=status.HTTP_201_CREATED)
        except:
            messages.error(request, 'Dentist was not registered!')
            return Response({'message': str(messages)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def register_technician(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print('-------->', data)

            password = data.get('password')
            password_repeat = data.get('password_repeat')

            validate_password(password, password_repeat)

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', 'تهران'),
                city=data.get('city', 'تهران'),
                phone_number=data.get('phone_number', '+989000000000'),
                is_patient=False,
                is_dentist=False,
                is_technician=True,
            )

            user.set_password(password)
            user.save()

            TechnicianProfile.objects.create(user=user,
                                             certification_number=data.get('certification_number'),
                                             email=data.get('email'))

            messages.success(request, 'Technician registered successfully!')
            return Response({'message': str(messages)}, status=status.HTTP_201_CREATED)
        except:
            messages.error(request, 'Technician was not registered!')
            return Response({'message': str(messages)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def register_technician_form(request):
    if request.method == 'POST':
        form = TechnicianRegistrationForm(request.POST)
        if form.is_valid():
            print('here2')
            data = form.cleaned_data
            password = data.get('password')
            password_repeat = data.get('password_repeat')

            try:
                validate_password(password, password_repeat)
            except ValidationError as e:
                form.add_error('password', e)
                return render(request, 'register_dentist.html', {'form': form})

            user = User.objects.create(
                username=data.get('username', ''),
                first_name=data.get('first_name', ''),
                last_name=data.get('last_name', ''),
                address=data.get('address', ''),
                province=data.get('province', ''),
                city=data.get('city', ''),
                phone_number=data.get('phone_number', ''),
                email=data.get('email', '')
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
        print('here3')
        form = TechnicianRegistrationForm()
    return render(request, 'register_technician.html', {'form': form})


class FormLoginView(View):
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
                login_user(request, user)
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


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def login_user(request):
    data = json.loads(request.body)
    print(data)
    username = data.get('username')
    password = data.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None and check_password(password, user.password):
        print("\n=====================")
        print(user, user.is_dentist)
        print("=====================\n")
        global CURRENT_USER
        CURRENT_USER['user'] = deepcopy(user)
        CURRENT_USER['is_logged_in'] = True
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_id': user.user_id, 'username': user.username},
                        status=status.HTTP_200_OK)

    return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)


@login_required
def patient_dashboard(request):
    return render(request, 'patient_dashboard.html')


@login_required
def dentist_dashboard(request):
    return render(request, 'dentist_dashboard.html')


@csrf_exempt
@login_required
def upload_image(request):
    if not request.user.is_technician:
        return HttpResponseForbidden("You are not authorized to upload images.")

    if request.method == 'POST':
        radiology_image = request.FILES.get('image')
        patient_id = request.POST.get('user_id')
        patient = get_object_or_404(PatientProfile, national_id=patient_id)
        
        radiology_image_instance = RadiologyImage.objects.create(
            user_id=patient_id,
            patient=patient,
            image=radiology_image
        )

        return render(request, 'base_user.html')



class CurrentPatientProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = PatientProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return PatientProfile.objects.get(user=self.request.user)


@csrf_exempt
@api_view(('POST',))
@renderer_classes((TemplateHTMLRenderer, JSONRenderer))
def update_patient(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)

            print(data.get('username'))

            user = User.objects.get(username=data.get('username'))
            user.city = data.get('city', '')
            user.province = data.get('province', '')
            user.address = data.get('address', '')
            validate_phone_number(data.get('phone_number'))
            user.phone_number = data.get('phone_number')

            if user.address:
                try:
                    latitude, longitude = get_geocode(user.address, settings.NESHAN_API_KEY)
                    user.location_latitude = latitude
                    user.location_longitude = longitude
                except ValueError:
                    pass

            user.save()

            print(user)
            messages.success(request, 'Patient updated successfully!')
            return Response({'message': str(messages)}, status=status.HTTP_200_OK)
        except ValidationError:
            messages.error(request, 'Invaild phone number')
            return Response({'message': str(messages)}, status=status.HTTP_400_BAD_REQUEST)
        except:
            messages.error(request, 'Dentist was not updated!')
            return Response({'message': str(messages)}, status=status.HTTP_400_BAD_REQUEST)
