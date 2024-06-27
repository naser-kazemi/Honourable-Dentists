import json
from .models import ImagingCenter
from django.views.generic import ListView, DetailView
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponseForbidden, JsonResponse
from rest_framework.response import Response
from rest_framework import status


class ImagingCenterListView(ListView):
    model = ImagingCenter
    template_name = 'imaging_center/list.html'


class ImagingCenterDetailView(DetailView):
    model = ImagingCenter
    template_name = 'imaging_center/detail.html'


@csrf_exempt
def send_imaging_centers(request):
    if request.method == "GET":
        centers = ImagingCenter.objects.all().values()
        centers_list = list(centers)
        return JsonResponse(centers_list, safe=False)  


@csrf_exempt
def imaging_center_form(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print('-------->', data)

        center = ImagingCenter.objects.create(
            name=data.get('name', ''),
            location=data.get('location', ''),
            phone=data.get('phone', ''),
            operational_hours=data.get('operational_hours', ''),
        )
        
        return render(request, "imaging_center/list.html")
