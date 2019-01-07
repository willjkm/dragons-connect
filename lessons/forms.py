"""This module contains the forms used throughout the LMS"""

from django import forms

WEEKDAYS = (
    ('0', 'Monday'),
    ('1', 'Tuesday'),
    ('2', 'Wednesday'),
    ('3', 'Thursday'),
    ('4', 'Friday'),
)

HOURS = (
    ('8', '8'),
    ('9', '9'),
    ('10', '10'),
    ('11', '11'),
    ('12', '12'),
    ('13', '1'),
    ('14', '2'),
    ('15', '3'),
    ('16', '4'),
    ('17', '5'),
)

MINUTES = (
    ('00', '00'),
    ('05', '05'),
    ('10', '10'),
    ('15', '15'),
    ('20', '20'),
    ('25', '25'),
    ('30', '30'),
    ('35', '35'),
    ('40', '40'),
    ('45', '45'),
    ('50', '50'),
    ('55', '55'),
)

class CreateWeeklyScheduleForm(forms.Form):

    """Used on the dashboard/schedule page to create a weekly schedule"""

    choose_weekdays = forms.ChoiceField(
        label='Lessons happen each week on',
        choices=WEEKDAYS,
        widget=forms.RadioSelect)
    lesson_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_start_min = forms.ChoiceField(label='', choices=MINUTES)
    course_start_date = forms.DateField(widget=forms.SelectDateWidget)

class UpdateKeForm(forms.Form):

    """used to update an instance of a scheduled lesson"""

    lesson_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_start_min = forms.ChoiceField(label='', choices=MINUTES)

class CreateCustomScheduleForm(forms.Form):

    """used to create a custom schedule. When updating to more courses we
    will need to change this to using Django Formsets"""

    lesson_1_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_1_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_1_start_min = forms.ChoiceField(label='', choices=MINUTES)
    lesson_2_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_2_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_2_start_min = forms.ChoiceField(label='', choices=MINUTES)
    lesson_3_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_3_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_3_start_min = forms.ChoiceField(label='', choices=MINUTES)
    lesson_4_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_4_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_4_start_min = forms.ChoiceField(label='', choices=MINUTES)
    lesson_5_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_5_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_5_start_min = forms.ChoiceField(label='', choices=MINUTES)
    lesson_6_date = forms.DateField(widget=forms.SelectDateWidget)
    lesson_6_start_hour = forms.ChoiceField(label='Lesson starts at', choices=HOURS)
    lesson_6_start_min = forms.ChoiceField(label='', choices=MINUTES)

class UnlockLessonForm(forms.Form):

    """used to set manual unlocking of lessons"""

    lesson_to_unlock = forms.IntegerField()
