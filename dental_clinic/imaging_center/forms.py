from django import forms
from .models import ImagingCenter

class ImagingCenterForm(forms.ModelForm):
    class Meta:
        model = ImagingCenter
        fields = '__all__'
