# Generated by Django 2.1.3 on 2018-11-25 23:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0012_auto_20181125_2242'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='next_available_lesson',
            field=models.PositiveIntegerField(default=1, null=True),
        ),
        migrations.AddField(
            model_name='profile',
            name='next_available_slide',
            field=models.PositiveIntegerField(default=1, null=True),
        ),
    ]
