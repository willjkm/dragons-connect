# Generated by Django 2.1.3 on 2018-11-28 20:10

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0019_auto_20181128_2002'),
    ]

    operations = [
        migrations.AlterField(
            model_name='section',
            name='teacher',
            field=models.ForeignKey(db_index=False, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]