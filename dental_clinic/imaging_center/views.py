from django.views.generic import ListView, DetailView
from .models import ImagingCenter
from django.contrib.auth.decorators import login_required
from .forms import RadiologyImageForm
from django.shortcuts import render, redirect
from django.http import HttpResponseForbidden


class ImagingCenterListView(ListView):
    model = ImagingCenter
    template_name = 'imaging_center/list.html'


class ImagingCenterDetailView(DetailView):
    model = ImagingCenter
    template_name = 'imaging_center/detail.html'

