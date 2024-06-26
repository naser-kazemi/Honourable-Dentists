from django.db import models

class ImagingCenter(models.Model):
    name = models.CharField(max_length=255)
    location = models.TextField()
    phone = models.TextField()
    operational_hours = models.TextField()

    def __str__(self):
        return self.name

