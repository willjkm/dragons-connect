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
