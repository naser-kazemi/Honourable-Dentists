from django.db import models
from django.conf import settings
from users.models import User
from services.models import Service
from django.utils import timezone


class Appointment(models.Model):
    STATUS_CHOICES = [
        ('in_progress', 'In Progress'),
        ('completed', 'Completed'),
    ]

    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments')
    dentist = models.ForeignKey(User, on_delete=models.CASCADE, related_name='appointments_as_dentist')
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    date = models.DateField(default=timezone.now)
    time = models.TimeField(default=timezone.now)
    description = models.TextField(default='No description provided')
    pain_level = models.IntegerField(choices=[(i, i) for i in range(1, 6)], default=1)
    status = models.CharField(max_length=12, choices=STATUS_CHOICES, default='in_progress')
    follow_up_needed = models.BooleanField(default=False)
    follow_up_description = models.TextField(blank=True, null=True, default='')

    def __str__(self):
        return f"{self.patient} - {self.dentist} - {self.date} {self.time}"
