from django.urls import path
from .views import ImagingCenterListView, ImagingCenterDetailView

urlpatterns = [
    path('', ImagingCenterListView.as_view(), name='center_list'),
    path('<int:pk>/', ImagingCenterDetailView.as_view(), name='center_detail'),
]
