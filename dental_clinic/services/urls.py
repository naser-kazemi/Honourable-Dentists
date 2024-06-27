from django.urls import path
from .views import ServiceListCreateView, ServiceRetrieveUpdate

urlpatterns = [
    path('', ServiceListCreateView.as_view(), name='service-list-create'),
    path('update/<int:pk>', ServiceRetrieveUpdate.as_view(), name='service-update'),
]
