from rest_framework import serializers
from .models import Appointment, User


class AppointmentReadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'


class AppointmentWriteSerializer(serializers.ModelSerializer):
    patient = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    class Meta:
        model = Appointment
        fields = [
            'patient',
            'dentist',
            'service',
            'date',
            'time',
            'description',
            'pain_level'
        ]

    def __init__(self, *args, **kwargs):
        super(AppointmentWriteSerializer, self).__init__(*args, **kwargs)
        self.fields['dentist'].queryset = User.objects.filter(is_dentist=True)


class AppointmentListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'id',
            'patient',
            'dentist',
            'service',
            'date',
            'time',
            'description',
            'pain_level',
            'status',
            'follow_up_needed',
            'follow_up_description'
        ]
