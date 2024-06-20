from django.views.generic import ListView, DetailView
from .models import ImagingCenter

class ImagingCenterListView(ListView):
    model = ImagingCenter
    template_name = 'imaging_center/list.html'

class ImagingCenterDetailView(DetailView):
    model = ImagingCenter
    template_name = 'imaging_center/detail.html'
