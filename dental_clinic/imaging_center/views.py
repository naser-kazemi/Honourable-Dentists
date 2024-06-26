from rest_framework import viewsets
from .models import ImagingCenter
from .serializers import ImagingCenterSerializer

class ImagingCenterViewSet(viewsets.ModelViewSet):
    queryset = ImagingCenter.objects.all()
    serializer_class = ImagingCenterSerializer

from django.shortcuts import render, get_object_or_404, redirect
from .models import ImagingCenter
from .forms import ImagingCenterForm

def imaging_center_list(request):
    centers = ImagingCenter.objects.all()
    return render(request, 'imaging_center/imaging_center_list.html', {'centers': centers})

def imaging_center_detail(request, pk):
    center = get_object_or_404(ImagingCenter, pk=pk)
    return render(request, 'imaging_center/imaging_center_detail.html', {'center': center})

def imaging_center_create(request):
    if request.method == 'POST':
        form = ImagingCenterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('imaging_center_list')
    else:
        form = ImagingCenterForm()
    return render(request, 'imaging_center/imaging_center_form.html', {'form': form, 'form_title': 'Add New Imaging Center', 'button_text': 'Add'})

def imaging_center_update(request, pk):
    center = get_object_or_404(ImagingCenter, pk=pk)
    if request.method == 'POST':
        form = ImagingCenterForm(request.POST, instance=center)
        if form.is_valid():
            form.save()
            return redirect('imaging_center_detail', pk=center.pk)
    else:
        form = ImagingCenterForm(instance=center)
    return render(request, 'imaging_center/imaging_center_form.html', {'form': form, 'form_title': 'Edit Imaging Center', 'button_text': 'Update'})

def imaging_center_delete(request, pk):
    center = get_object_or_404(ImagingCenter, pk=pk)
    if request.method == 'POST':
        center.delete()
        return redirect('imaging_center_list')
    return render(request, 'imaging_center/imaging_center_confirm_delete.html', {'center': center})
