""" Models define the database tables """

from django.db import models
from django.conf import settings
from django.contrib.auth.models import User
from django.contrib.auth.signals import user_logged_in
from django.db.models.signals import post_save
from django.dispatch import receiver
from adminsortable.models import SortableMixin
from adminsortable.fields import SortableForeignKey

class Lesson(SortableMixin):

    """Lessons define the descriptions of the content of each lesson in the LMS"""

    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/', null=True)

    class Meta:
        ordering = ['lesson_order']

    lesson_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)

    def __str__(self):
        return self.title

class Slide(SortableMixin):

    """Slides define the content of each part of a lesson"""

    title = models.CharField(max_length=200)
    lesson = SortableForeignKey(Lesson, on_delete=models.CASCADE, null=True)
    bodyText = models.TextField()
    content_url = models.CharField(max_length=200, null=True, blank=True)
    content_type = models.CharField(max_length=20, null=True, blank=True)

    class Meta:
        ordering = ['slide_order']

    slide_order = models.PositiveIntegerField(default=0, editable=False, db_index=True)

    def __str__(self):
        return self.title

class LearningEvent(models.Model):

    """Learning events describe the history of student interaction with the LMS"""

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    action = models.CharField(max_length=25)
    element_name = models.CharField(max_length=50, null=True)
    slide = models.PositiveIntegerField(null=True)
    lesson = models.PositiveIntegerField(null=True)
    action_datetime = models.DateTimeField(auto_now_add=True)
    score = models.PositiveIntegerField(null=True)
    coins = models.PositiveIntegerField(null=True)
    award = models.CharField(max_length=25, null=True)

    def __str__(self):
        _description = " ".join(
            [str(self.user), self.action, self.element_name, "at", str(self.action_datetime)])
        return _description

class School(models.Model):

    """Schools with active courses"""

    school_name = models.CharField(max_length=80)

    def __str__(self):
        return self.school_name

class Class(models.Model):

    """Classes must all have lessons at the same time.
    Classes may have multiple sections and teachers."""

    class_name = models.CharField(max_length=30, null=True)
    year_group = models.PositiveIntegerField(null=True, default=7)
    school = models.ForeignKey(School, on_delete=models.CASCADE, db_index=False)
    schedule_description = models.CharField(max_length=50, null=True, blank=True)
    manual_unlock_enabled = models.BooleanField(null=True, default=False)
    manual_unlock_lesson = models.PositiveIntegerField(null=True, default=1)

    def __str__(self):
        my_name = " ".join([str(self.school), self.class_name])
        return my_name

class Section(models.Model):

    """Sections are parts of a class all taught by the same teacher."""

    section_name = models.CharField(max_length=10, null=True)
    section_class = models.ForeignKey(Class, on_delete=models.CASCADE, db_index=False)
    teacher = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        null=True,
        db_index=False)

    def __str__(self):
        my_name = " ".join([str(self.section_class), "Section", self.section_name])
        return my_name

class Ke(models.Model):

    """Ke are scheduled instances of a particular lesson"""

    title = models.CharField(max_length=100, null=True)
    ke_class = models.ForeignKey(Class, on_delete=models.CASCADE, db_index=False)
    active_lesson = models.PositiveIntegerField()
    length = models.PositiveIntegerField()
    datetime = models.DateTimeField()

    def __str__(self):
        return self.title

class Profile(models.Model):

    """Profiles extend the django user model"""

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
    section = models.ForeignKey(
        Section,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        db_index=False)
    school = models.ForeignKey(
        School,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
        db_index=False)
    nickname = models.CharField(
        max_length=22,
        null=True
    )
    avatar = models.PositiveIntegerField(null=True, default=1)

class Login(models.Model):

    """keeping track of when users log in"""

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return " ".join([str(self.user), "logged in at", str(self.datetime)])

"""the following @receiver sections create new Logins when users login"""

@receiver(user_logged_in)
def user_logged_in_callback(sender, request, user, **kwargs):
    Login.objects.create(user=user)

"""the following @receiver sections link the saving of the user profile with the user model"""

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()
