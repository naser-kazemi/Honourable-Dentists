from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'imaging-centers', views.ImagingCenterViewSet)

urlpatterns = [
    path('', views.imaging_center_list, name='imaging_center_list'),
    path('imaging-center/<int:pk>/', views.imaging_center_detail, name='imaging_center_detail'),
    path('imaging-center/new/', views.imaging_center_create, name='imaging_center_create'),
    path('imaging-center/<int:pk>/edit/', views.imaging_center_update, name='imaging_center_update'),
    path('imaging-center/<int:pk>/delete/', views.imaging_center_delete, name='imaging_center_delete'),
    path('api/', include(router.urls)),
]
