from django.contrib import admin
from adminsortable.admin import SortableAdmin

# Register your models here.
from .models import Slide, Lesson

admin.site.register(Slide, SortableAdmin)
admin.site.register(Lesson, SortableAdmin)
