# Generated by Django 2.1.3 on 2018-11-28 20:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0018_section_teacher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='teacher',
            field=models.ForeignKey(db_index=False, limit_choices_to={'role': 'teacher'}, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]