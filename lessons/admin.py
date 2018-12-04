"""This Admin module customizes the Django admin panel"""

from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User
from adminsortable.admin import SortableAdmin
from .models import Slide, Lesson, LearningEvent, Profile, Section, Class, School, Ke

admin.site.register(Slide, SortableAdmin)
admin.site.register(Lesson, SortableAdmin)
admin.site.register(LearningEvent)
admin.site.register(School)
admin.site.register(Class)
admin.site.register(Ke)

# The following section allows the admin panel to show profile information

class ProfileInline(admin.StackedInline):
    model = Profile
    can_delete = False

class UserAdmin(BaseUserAdmin):
    inlines = (ProfileInline,)

admin.site.unregister(User)
admin.site.register(User, UserAdmin)

# End of user and profile section

# This section registers the "section" model and also changes
# the field 'teacher' so that only users are listed who are teachers

@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "teacher":
            kwargs["queryset"] = User.objects.filter(profile__role='teacher')
        return super().formfield_for_foreignkey(db_field, request, **kwargs)
