from django.urls import path
from .views import (ImagingCenterListView,
                   ImagingCenterDetailView,
                   send_imaging_centers,
                   imaging_center_form,
                   imaging_appointment_form)


urlpatterns = [
    path('', ImagingCenterListView.as_view(), name='center_list'),
    path('<int:pk>/', ImagingCenterDetailView.as_view(), name='center_detail'),
    path('centerform/', imaging_center_form, name='imaging_center_form'),
    path('sendimagingcenters/', send_imaging_centers, name='send_imaging_centers'),
    path('imagingappointment/', imaging_appointment_form, name='imaging_appointment_form'),
]
