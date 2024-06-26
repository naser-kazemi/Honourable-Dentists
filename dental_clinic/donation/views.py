from django.shortcuts import render
from .models import Donation

# Create your views here.
def donation_form(request):
    if request.method == "POST":
        # Process the form data
        pass
    else:
        # Show empty form
        return render(request, "donation/donation_form.html")