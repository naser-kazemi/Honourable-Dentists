from django.db import models
from django.contrib.auth.models import AbstractUser
from .validators import validate_national_id, validate_phone_number


# Create your models here.
class User(AbstractUser):
    is_patient = models.BooleanField(default=False)
    is_dentist = models.BooleanField(default=False)
    user_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=30, null=False, blank=False)
    last_name = models.CharField(max_length=30, null=False, blank=False)
    username = models.CharField(max_length=30, null=False, blank=False, unique=True)
    password = models.CharField(max_length=128, null=False, blank=False)
    address = models.TextField()
    province = models.CharField(max_length=50, null=False, blank=False, default='تهران')
    city = models.CharField(max_length=50, null=False, blank=False, default='تهران')
    phone_number = models.CharField(max_length=15, validators=[validate_phone_number])
    location_latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    location_longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)


class PatientProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    national_id = models.CharField(max_length=20, validators=[validate_national_id], null=False, blank=False,
                                   default='0000000000')
    # set default value for birth_date
    birth_date = models.DateField(default='2000-01-01', null=False, blank=False)


class DentistProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    medical_council_number = models.CharField(max_length=50)
    email = models.EmailField(unique=True)


