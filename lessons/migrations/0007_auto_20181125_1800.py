# Generated by Django 2.1.3 on 2018-11-25 18:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('lessons', '0006_lesson_image'),
    ]

    operations = [
        migrations.CreateModel(
            name='LearningEvent',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action', models.CharField(max_length=25)),
                ('element', models.CharField(max_length=50)),
                ('action_datetime', models.DateTimeField(default=django.utils.timezone.now)),
                ('score', models.PositiveIntegerField(null=True)),
                ('award', models.CharField(max_length=25, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.AlterField(
            model_name='lesson',
            name='image',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
