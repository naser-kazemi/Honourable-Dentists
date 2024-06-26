from django.urls import path
from .views import (AppointmentListCreateView,
                    create_appointment,
                    appointment_success,
                    AppointmentUpdateView,
                    TodayAppointmentListView,
                    AppointmentListView)

urlpatterns = [
    path('', AppointmentListCreateView.as_view(), name='appointment-list-create'),
    path('appointment/create/', create_appointment, name='create_appointment'),
    path('appointment/success/', appointment_success, name='appointment_success'),
    path('appointments/all/', AppointmentListView.as_view(), name='list_appointments'),
    path('appointments/today/', TodayAppointmentListView.as_view(), name='today_appointments'),
    path('appointments/<int:pk>/update/', AppointmentUpdateView.as_view(), name='update_appointment'),
]
