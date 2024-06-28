from django.db import models
from users.models import User, PatientProfile
from django.utils import timezone


class ImagingCenter(models.Model):
    center_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.TextField(default='No location provided')
    phone = models.TextField(default='No services listed')
    operational_hours = models.TextField(default='No operational hours provided')

    def __str__(self):
        return self.name


class ImagingAppointment(models.Model):
    imaging_center = models.ForeignKey(ImagingCenter, on_delete=models.CASCADE)
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE)
    appointment_date = models.DateField(default=timezone.now)
    appointment_time = models.TimeField(default=timezone.now)
    notes = models.TextField(blank=True, default='')

    def __str__(self):
        return f"Appointment for {self.patient_profile} at {self.imaging_center} on {self.appointment_date} at {self.appointment_time}"
