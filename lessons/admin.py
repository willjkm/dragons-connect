from django.contrib import admin
from adminsortable.admin import SortableAdmin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from .models import Slide, Lesson, LearningEvent, Profile

admin.site.register(Slide, SortableAdmin)
admin.site.register(Lesson, SortableAdmin)
admin.site.register(LearningEvent)

# The following section allows the admin panel to show profile information

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False

class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)

# End of user and profile section