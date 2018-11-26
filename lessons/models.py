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

class Role(models.Model):
    title = models.CharField(max_length=25)

    def __str__(self):
        return self.title

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE, null=True)
    next_lesson = models.PositiveIntegerField(null=True, default=1)
    next_slide = models.PositiveIntegerField(null=True, default=1)

# the following @receiver sections link the saving of the user profile with the user model

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)

@receiver(post_save, sender=User)
def save_user_profile(sender, instance, **kwargs):
    instance.profile.save()