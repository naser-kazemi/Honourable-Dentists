from rest_framework import serializers
from .models import ImagingCenter

class ImagingCenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImagingCenter
        fields = '__all__'
