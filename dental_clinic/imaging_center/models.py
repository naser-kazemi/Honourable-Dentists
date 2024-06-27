from django.db import models

from users.models import User, PatientProfile


class ImagingCenter(models.Model):
    center_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    location = models.TextField(default='No location provided')
    phone = models.TextField(default='No services listed')
    operational_hours = models.TextField(default='No operational hours provided')

    def __str__(self):
        return self.name
