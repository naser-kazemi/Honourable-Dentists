from django.db import models

class ImagingCenter(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    services = models.TextField()
    operational_hours = models.CharField(max_length=255)
    contact_info = models.CharField(max_length=255)

    def __str__(self):
        return self.name
