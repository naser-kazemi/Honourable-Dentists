from django.db import models

from users.models import User, PatientProfile


class ImagingCenter(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField(default='No location provided')
    services = models.TextField(default='No services listed')
    operational_hours = models.TextField(default='No operational hours provided')

    def __str__(self):
        return self.name


class RadiologyImage(models.Model):
    patient = models.ForeignKey(PatientProfile, on_delete=models.CASCADE, related_name='radiology_images')
    image = models.ImageField(upload_to='radiology_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    technician = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'is_technician': True})
