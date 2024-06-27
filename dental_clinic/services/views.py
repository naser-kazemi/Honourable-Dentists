from rest_framework import generics
from django_filters import rest_framework as filters
from .models import Service
from .serializers import ServiceSerializer


class ServiceFilter(filters.FilterSet):
    name = filters.CharFilter(field_name="name", lookup_expr='icontains')
    price = filters.NumberFilter(field_name="price")

    class Meta:
        model = Service
        fields = ['name', 'price']


class ServiceListCreateView(generics.ListCreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filterset_class = ServiceFilter


class ServiceRetrieveUpdate(generics.RetrieveUpdateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    filterset_class = ServiceFilter
