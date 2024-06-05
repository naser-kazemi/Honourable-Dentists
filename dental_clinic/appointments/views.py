from rest_framework import generics
from django_filters import rest_framework as filters
from .models import Appointment
from .serializers import AppointmentSerializer


class AppointmentFilter(filters.FilterSet):
    patient = filters.NumberFilter(field_name="patient__id")
    dentist = filters.NumberFilter(field_name="dentist__id")
    service = filters.NumberFilter(field_name="service__id")
    appointment_date = filters.DateTimeFilter(field_name="appointment_date")

    class Meta:
        model = Appointment
        fields = ['patient', 'dentist', 'service', 'appointment_date']


class AppointmentListCreateView(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    filterset_class = AppointmentFilter
