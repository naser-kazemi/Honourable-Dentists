from django.db import models

from users.models import User


class ImagingCenter(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField(default='No location provided')
    services = models.TextField(default='No services listed')
    operational_hours = models.TextField(default='No operational hours provided')

    def __str__(self):
        return self.name


class RadiologyImage(models.Model):
    technician = models.ForeignKey(User, on_delete=models.CASCADE, limit_choices_to={'is_technician': True})
    user_id = models.IntegerField()
    image = models.ImageField(upload_to='radiology_images/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
