# Generated by Django 2.1.3 on 2019-01-25 14:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0030_auto_20190124_1943'),
    ]

    operations = [
        migrations.AddField(
            model_name='slide',
            name='content_type',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]