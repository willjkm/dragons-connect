# Generated by Django 2.1.3 on 2018-11-28 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0022_auto_20181128_2218'),
    ]

    operations = [
        migrations.AddField(
            model_name='class',
            name='class_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='class',
            name='class_weekday',
            field=models.CharField(blank=True, choices=[('Mon', 'Monday'), ('Tue', 'Tuesday'), ('Wed', 'Wednesday'), ('Thu', 'Thursday'), ('Fri', 'Friday'), ('Sat', 'Saturday'), ('Sun', 'Sunday')], max_length=3, null=True),
        ),
    ]
