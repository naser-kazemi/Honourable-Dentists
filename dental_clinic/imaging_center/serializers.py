from rest_framework import serializers
from .models import ImagingCenter

class ImagingCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagingCenter
        fields = ['id', 'name', 'location', 'services', 'operational_hours']
