from django import forms
from .models import Appointment, Service, User


class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['service', 'dentist',
                  'date', 'time',
                  'description', 'pain_level',
                  'status', 'follow_up_needed',
                  'follow_up_description']
        widgets = {
            'date': forms.DateInput(attrs={'type': 'date', 'class': 'form-control'}),
            'time': forms.TimeInput(attrs={'type': 'time', 'class': 'form-control'}),
            'description': forms.Textarea(attrs={'class': 'form-control'}),
            'pain_level': forms.Select(attrs={'class': 'form-control'}),
            'service': forms.Select(attrs={'class': 'form-control'}),
            'dentist': forms.Select(attrs={'class': 'form-control'}),
            'status': forms.Select(attrs={'class': 'form-control'}),
            'follow_up_needed': forms.CheckboxInput(attrs={'class': 'form-check-input'}),
            'follow_up_description': forms.Textarea(attrs={'class': 'form-control', 'rows': 3}),
        }

    def __init__(self, *args, **kwargs):
        patient = kwargs.pop('patient', None)
        super().__init__(*args, **kwargs)
        if patient:
            self.fields['dentist'].queryset = User.objects.filter(is_dentist=True,
                                                                  services__in=self.instance.service.all())
