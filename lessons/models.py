from django.db import models
from adminsortable.models import SortableMixin
from adminsortable.fields import SortableForeignKey

# Create your models here.

class Lesson(SortableMixin):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=200)

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
