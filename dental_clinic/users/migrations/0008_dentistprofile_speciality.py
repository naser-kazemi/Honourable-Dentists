# Generated by Django 4.2.13 on 2024-06-27 13:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_alter_radiologyimage_technician'),
    ]

    operations = [
        migrations.AddField(
            model_name='dentistprofile',
            name='speciality',
            field=models.CharField(default='General Dentist', max_length=50),
        ),
    ]
