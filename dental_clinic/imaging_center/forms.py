from django import forms
from .models import RadiologyImage


class RadiologyImageForm(forms.ModelForm):
    class Meta:
        model = RadiologyImage
        fields = ['technician', 'patient', 'image']
