from django.db import models
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import PatientProfile, DentistProfile, TechnicianProfile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'user_id', 'username', 'is_patient', 'is_dentist', 'first_name', 'last_name', 'address', 'password',
            'province', 'city', 'phone_number', 'location_latitude', 'location_longitude'
        ]


class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    password_repeat = models.CharField(max_length=128, null=False, blank=False)

    class Meta:
        model = PatientProfile
        fields = ['user', 'national_id', 'birth_date']


class DentistProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = DentistProfile
        fields = ['user', 'medical_council_number']


class TechnicianProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = TechnicianProfile
        fields = ['user', 'certification_number']
