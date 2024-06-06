# users/signals.py
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.conf import settings
from .models import User
from dental_clinic.utils import get_geocode


@receiver(post_save, sender=User)
def update_user_geocode(sender, instance, created, **kwargs):
    if created and instance.address:
        try:
            latitude, longitude = get_geocode(instance.address, settings.NESHAN_API_KEY)
            instance.latitude = latitude
            instance.longitude = longitude
            instance.save()
        except ValueError as e:
            # Handle the error if necessary
            pass
