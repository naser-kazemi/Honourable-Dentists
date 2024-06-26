# users/forms.py
from django import forms
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate
from django.utils import timezone

from .models import User, PatientProfile, DentistProfile
from .validators import validate_national_id


class UserRegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password_repeat = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password', 'password_repeat', 'address', 'province',
                  'city', 'phone_number']
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'address': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
            'province': forms.TextInput(attrs={'class': 'form-control'}),
            'city': forms.TextInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control'}),
        }


class PatientRegistrationForm(UserRegistrationForm):
    national_id = forms.CharField(max_length=20, validators=[validate_national_id],
                                  widget=forms.TextInput(attrs={'class': 'form-control'}))
    birth_date = forms.DateField(
        widget=forms.SelectDateWidget(
            years=range(1900, timezone.now().year + 1),
            attrs={'class': 'form-control'}
        ),
        initial=timezone.now().date()
    )

    class Meta(UserRegistrationForm.Meta):
        model = User
        fields = UserRegistrationForm.Meta.fields + ['national_id', 'birth_date']


class DentistRegistrationForm(UserRegistrationForm):
    medical_council_number = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))

    class Meta(UserRegistrationForm.Meta):
        model = User
        fields = UserRegistrationForm.Meta.fields + ['medical_council_number', 'email']


class TechnicianRegistrationForm(UserRegistrationForm):
    certification_number = forms.CharField(max_length=50, widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class': 'form-control'}))

    class Meta(UserRegistrationForm.Meta):
        model = User
        fields = UserRegistrationForm.Meta.fields + ['certification_number', 'email']


class CustomLoginForm(forms.Form):
    username = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control'})
    )
    password = forms.CharField(
        widget=forms.PasswordInput(attrs={'class': 'form-control'})
    )

    def clean(self):
        cleaned_data = super().clean()
        username = cleaned_data.get('username')
        password = cleaned_data.get('password')

        if username and password:
            user = authenticate(username=username, password=password)
            if not user:
                raise forms.ValidationError('Invalid username or password.')
        return cleaned_data
