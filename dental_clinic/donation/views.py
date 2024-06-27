from django.shortcuts import render
from .models import Donation


def donation_form(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print('-------->', data)
        
        return render(request, "donation/donation_form.html")

