from django.urls import path
from .views import PatientProfileListCreateView, DentistProfileListCreateView, update_geocode

urlpatterns = [
    path('patients/', PatientProfileListCreateView.as_view(), name='patient-list-create'),
    path('dentists/', DentistProfileListCreateView.as_view(), name='dentist-list-create'),
    path('update-geocode/', update_geocode, name='update-geocode'),
]
