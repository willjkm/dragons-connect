# Generated by Django 2.1.3 on 2019-03-22 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0031_slide_content_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='learningevent',
            name='coins',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
