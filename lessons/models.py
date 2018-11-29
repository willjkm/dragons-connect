from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
from adminsortable.models import SortableMixin
from adminsortable.fields import SortableForeignKey

class Lesson(SortableMixin):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', null=True)

    class Meta:
        ordering = ['lesson_order']

    lesson_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)

    def __str__(self):
        return self.title

class Slide(SortableMixin):
    title = models.CharField(max_length=200)
    lesson = SortableForeignKey(Lesson, on_delete=models.CASCADE, null=True)
    bodyText = models.TextField()

    class Meta:
        ordering = ['slide_order']

    slide_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)

    def __str__(self):
        return self.title

class LearningEvent(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    action = models.CharField(max_length=25)
    element_name = models.CharField(max_length=50, null=True)
    slide = models.PositiveIntegerField(null=True)
    lesson = models.PositiveIntegerField(null=True)
    action_datetime = models.DateTimeField(auto_now_add=True)
    score = models.PositiveIntegerField(null=True)
    award = models.CharField(max_length=25, null=True)

    def __str__(self):
        _description = " ".join([str(self.user), self.action, self.element_name, "at", str(self.action_datetime)])
        return _description

class School(models.Model):
    school_name = models.CharField(max_length=80)

    def __str__(self):
        return self.school_name

class Class(models.Model):
    WEEKDAY_CHOICES = (
        ('Mon', 'Monday'),
        ('Tue', 'Tuesday'),
        ('Wed', 'Wednesday'),
        ('Thu', 'Thursday'),
        ('Fri', 'Friday'),
        ('Sat', 'Saturday'),
        ('Sun', 'Sunday'),
    )

    class_name = models.CharField(max_length=30, null=True)
    year_group = models.PositiveIntegerField(null=True, default=7)
    school = models.ForeignKey(School, on_delete=models.CASCADE, db_index=False)
    class_weekday = models.CharField(
        max_length=3,
        choices=WEEKDAY_CHOICES,
        blank=True,
        null=True
    )
    class_time = models.TimeField(null=True, blank=True)

    def __str__(self):
        myName = " ".join([str(self.school), self.class_name])
        return myName
    
class Section(models.Model):
    section_name = models.CharField(max_length=10, null=True)
    section_class = models.ForeignKey(Class, on_delete=models.CASCADE, db_index=False)
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL, 
        on_delete=models.CASCADE,
        null=True, 
        db_index=False)
    
    def __str__(self):
        myName = " ".join([str(self.section_class), "Section", self.section_name])
        return myName

class Profile(models.Model):
    ROLE_CHOICES = (
        ('teacher', 'teacher'),
        ('student', 'student'),
        ('manager', 'school administrator'),
        ('admin', 'website administrator'),
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    role = models.CharField(
        max_length=7,
        choices=ROLE_CHOICES,
        default='student',
        null=True
    )
    active_lesson = models.PositiveIntegerField(null=True, default=1)
    active_slide = models.PositiveIntegerField(null=True, default=1)
    section = models.ForeignKey(Section, on_delete=models.CASCADE, null=True, blank=True, db_index=False)
    school = models.ForeignKey(School, on_delete=models.CASCADE, null=True, blank=True, db_index=False)

# the following @receiver sections link the saving of the user profile with the user model

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
