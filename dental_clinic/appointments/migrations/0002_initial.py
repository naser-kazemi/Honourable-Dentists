# Generated by Django 4.2.13 on 2024-06-05 11:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('services', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('appointments', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='dentist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments_as_dentist', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='appointment',
            name='patient',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='appointments_as_patient', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='appointment',
            name='service',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.service'),
        ),
    ]
