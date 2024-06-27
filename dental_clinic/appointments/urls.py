from django.urls import path
from .views import (AppointmentListCreateView,
                    create_appointment_form,
                    appointment_success,
                    AppointmentUpdateView,
                    DentistAppointmentListView,
                    DentistTodayAppointmentListView,
                    PatientTodaysAppointmentsView,
                    PatientAppointmentsView,
                    create_appointment,
                    appointment_detail_view,
                    )

urlpatterns = [
    path('', AppointmentListCreateView.as_view(), name='appointment-list-create'),
    path('createform/', create_appointment_form, name='create_appointment-form'),
    path('create/', create_appointment, name='create_appointment'),
    path('success/', appointment_success, name='appointment_success'),
    path('all/dentist', DentistAppointmentListView.as_view(), name='dentist_list_appointments'),
    path('today/dentist', DentistTodayAppointmentListView.as_view(), name='dentist_today_appointments'),
    path('<int:pk>/update/', AppointmentUpdateView.as_view(), name='update_appointment'),
    path('all/patient/', PatientAppointmentsView.as_view(), name='patient_list_appointments'),
    path('today/patient/', PatientTodaysAppointmentsView.as_view(), name='patient_today_appointments'),
    path('<int:appointment_id>/', appointment_detail_view, name='appointment-detail'),
]
