from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.conf import settings
from .models import PatientProfile, DentistProfile
from .serializers import UserSerializer, PatientProfileSerializer, DentistProfileSerializer
from ..dental_clinic.utils import get_geocode


# Create your views here.

class PatientProfileListCreateView(generics.ListCreateAPIView):
    queryset = PatientProfile.objects.all()
    serializer_class = PatientProfileSerializer


class DentistProfileListCreateView(generics.ListCreateAPIView):
    queryset = DentistProfile.objects.all()
    serializer_class = DentistProfileSerializer


@api_view(['POST'])
def update_geocode(request):
    user = request.user
    address = request.data.get('address')

    if not address:
        return Response({'error': 'Address is required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        latitude, longitude = get_geocode(address, settings.NESHAN_API_KEY)
        user.latitude = latitude
        user.longitude = longitude
        user.save()
        return Response(UserSerializer(user).data, status=status.HTTP_200_OK)
    except ValueError as e:
        return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
