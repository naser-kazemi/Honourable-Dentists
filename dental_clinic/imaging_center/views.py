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


@login_required
def upload_image(request):
    if not request.user.is_technician:
        return HttpResponseForbidden("You are not authorized to upload images.")
    
    if request.method == 'POST':
        form = RadiologyImageForm(request.POST, request.FILES)
        if form.is_valid():
            radiology_image = form.save(commit=False)
            radiology_image.technician = request.user
            radiology_image.save()
            return redirect('some_view')
    else:
        form = RadiologyImageForm()
    return render(request, 'imaging_center/upload_image.html', {'form': form})
