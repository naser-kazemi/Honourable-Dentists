from django.urls import path
from . import views

urlpatterns = [
    path('donate/', views.donation_form, name='donation_form'),
]