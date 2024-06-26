# Generated by Django 4.2.13 on 2024-06-05 13:12

from django.db import migrations, models
import users.validators


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='national_id',
        ),
        migrations.AddField(
            model_name='patientprofile',
            name='birth_date',
            field=models.DateField(default='2000-01-01'),
        ),
        migrations.AddField(
            model_name='patientprofile',
            name='national_id',
            field=models.CharField(default='0000000000', max_length=20, validators=[users.validators.validate_national_id]),
        ),
        migrations.AddField(
            model_name='user',
            name='province',
            field=models.CharField(default='تهران', max_length=50),
        ),
        migrations.AlterField(
            model_name='user',
            name='city',
            field=models.CharField(default='تهران', max_length=50),
        ),
    ]
