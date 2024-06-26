from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import (PatientProfileListCreateView,
                    DentistProfileListCreateView,
                    update_geocode,
                    create_user_from_form,
                    register_patient,
                    register_dentist,
                    register_technician,
                    CustomLoginView,
                    patient_dashboard,
                    dentist_dashboard,
                    upload_image, register_patient_form
                    )

urlpatterns = [
    path('patients/', PatientProfileListCreateView.as_view(), name='patient-list-create'),
    path('dentists/', DentistProfileListCreateView.as_view(), name='dentist-list-create'),
    path('update-geocode/', update_geocode, name='update-geocode'),
    path('create/', create_user_from_form, name='create-user-from-form'),
    path('register/patient_form/', register_patient_form, name='register-patient-form'),
    path('register/patient/', register_patient, name='register-patient'),
    path('register/dentist/', register_dentist, name='register-dentist'),
    path('register/technician/', register_technician, name='register-technician'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='/login/'), name='logout'),
    path('dashboard/patient/', patient_dashboard, name='patient_dashboard'),
    path('dashboard/dentist/', dentist_dashboard, name='dentist_dashboard'),
    path('upload-image/', upload_image, name='upload_image'),
]
