# Generated by Django 2.1.3 on 2018-11-26 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0014_auto_20181126_0026'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='role',
            field=models.CharField(choices=[('teacher', 'teacher'), ('student', 'student'), ('manager', 'school administrator'), ('admin', 'website administrator')], default='student', max_length=7, null=True),
        ),
        migrations.DeleteModel(
            name='Role',
        ),
    ]
