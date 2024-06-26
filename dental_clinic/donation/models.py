from django.db import models
from django.utils import timezone


# Create your models here.
class Donation(models.Model):
    donor_name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    date = models.DateField(default=timezone.now)
    email = models.EmailField()
    is_recurring = models.BooleanField(default=False)
    message = models.TextField(blank=True, null=True, default='Thank you for your donation!')

    def __str__(self):
        return f"{self.donor_name} - ${self.amount}"
