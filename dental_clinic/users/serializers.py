from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import PatientProfile, DentistProfile

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'user_id', 'email', 'is_patient', 'is_dentist',
            'national_id', 'first_name', 'last_name', 'address',
            'city', 'phone_number', 'latitude', 'longitude'
        ]


class PatientProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = PatientProfile
        fields = ['user']


class DentistProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = DentistProfile
        fields = ['user', 'medical_council_number']
