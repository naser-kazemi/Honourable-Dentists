from django.shortcuts import render
from .models import Donation
from django.views.decorators.csrf import csrf_exempt
import json


@csrf_exempt
def donation_form(request):
    if request.method == "POST":
        data = json.loads(request.body)
        print('-------->', data)

        donation = Donation.objects.create(
            donor_name=data.get('name', ''),
            amount=data.get('amount', ''),
            email=data.get('email', ''),
            is_recurring=data.get('is_recurring', False),
        )
        
        return render(request, "donation/donation_form.html")

