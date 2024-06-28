from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import (PatientProfileListCreateView,
                    DentistProfileListCreateView,
                    update_geocode,
                    create_user_from_form,
                    register_patient,
                    register_dentist,
                    register_technician,
                    FormLoginView,
                    patient_dashboard,
                    dentist_dashboard,
                    upload_image,
                    register_patient_form,
                    login_user,
                    CurrentUserProfileView,
                    update_user,
                    fetch_image
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
    path('customlogin/', FormLoginView.as_view(), name='custom-login'),
    path('login/', login_user, name='login'),
    path('logout/', LogoutView.as_view(next_page='/login/'), name='logout'),
    path('dashboard/patient/', patient_dashboard, name='patient_dashboard'),
    path('current_user/', CurrentUserProfileView.as_view(), name='current_user'),
    path('update_current_user/', update_user, name='update_user'),
    path('dashboard/dentist/', dentist_dashboard, name='dentist_dashboard'),
    path('upload-image/', upload_image, name='upload_image'),
    path('fetch-image/', fetch_image, name='fetch_image'),
]
