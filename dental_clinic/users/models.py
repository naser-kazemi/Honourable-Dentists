from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_national_id, validate_phone_number


# Create your models here.
class User(AbstractUser):
    is_patient = models.BooleanField(default=False)
    is_dentist = models.BooleanField(default=False)
    user_id = models.AutoField(primary_key=True)
    national_id = models.CharField(max_length=20, validators=[validate_national_id])
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    address = models.TextField()
    city = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15, validators=[validate_phone_number])
    location_latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    location_longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)


class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)


class DentistProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    medical_council_number = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
