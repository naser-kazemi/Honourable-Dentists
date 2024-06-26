from rest_framework import serializers
from .models import ImagingCenter

class ImagingCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagingCenter
        fields = ['id', 'name', 'location', 'phone', 'operational_hours']
