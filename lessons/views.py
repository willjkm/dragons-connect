"""Views organizes and provides data for HTTP requests"""

from datetime import datetime, timedelta
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User
import pytz
from .models import Lesson, Slide, LearningEvent, Section, Class, Ke
from .forms import CreateWeeklyScheduleForm, UpdateKeForm, CreateCustomScheduleForm, UnlockLessonForm

def home(request):

    """Dragons Connect homepage - either login or get redirected to the dashboard"""

    if not request.user.is_authenticated:
        return redirect('%s?next=%sdashboard' % (settings.LOGIN_URL, request.path))
    else:
        return redirect('/dashboard/')

@login_required
def index(request):

    """Index of lessons page"""

    context = {
        'title': 'Introduction to Chinese',
        'role': request.user.profile.role,
        'lessons': Lesson.objects.all(),
        'activeLesson': request.user.profile.active_lesson,
        'activeSlide': request.user.profile.active_slide,
        'percentComplete': getPercentComplete(request.user)
    }

    return render(request, 'lessons/index.html', context)

@login_required
def slide(request, lessonid, slideid):

    """Lesson content pages"""

    # Find the current lesson and slide

    current_lesson = Lesson.objects.get(lesson_order=lessonid)
    current_slide_number = int(slideid)
    current_slide = Slide.objects.filter(lesson=current_lesson.pk)[current_slide_number-1]
    role = request.user.profile.role

    # Determine if this is the final slide or not

    if current_slide_number == len(Slide.objects.filter(lesson=current_lesson.pk)):
        is_final_slide = True
    else:
        is_final_slide = False

    # Determine if the next slide is available to learn when the page loads

    if current_lesson.lesson_order == request.user.profile.active_lesson and \
    current_slide_number == request.user.profile.active_slide:
        next_slide_is_available = False
    else:
        next_slide_is_available = True

    # Create new learning event for a logged in student viewing the slide

    if request.user.is_authenticated and role == "student":
        learning_event = LearningEvent.objects.create(
            user=request.user,
            action="viewed",
            element_name=" ".join(["Lesson", str(current_lesson.lesson_order), "Slide", slideid]),
            slide=current_slide_number,
            lesson=current_lesson.lesson_order
        )
        learning_event.save()

    this_lesson_slides = Slide.objects.filter(lesson=current_lesson.pk)
    counter = 1
    for _slide in this_lesson_slides:
        _slide.position = counter
        counter += 1

    if current_slide.content_url:
        url = current_slide.content_url
    else:
        url = "../../../games/demogame/"

    context = {
        'slides': this_lesson_slides,
        'slide': current_slide,
        'lesson': current_lesson,
        'activeLesson': request.user.profile.active_lesson,
        'activeSlide': request.user.profile.active_slide,
        'next_lesson': current_lesson.lesson_order + 1,
        'previous_slide': current_slide_number - 1,
        'current_slide': current_slide_number,
        'next_slide': current_slide_number + 1,
        'is_final_slide': is_final_slide,
        'next_slide_is_available': next_slide_is_available,
        'role': role,
        'url': url
    }

    return render(request, 'lessons/slide.html', context)

def gameOver(request):

    """this processes the info submitted by the game when gameover"""

    role = request.user.profile.role

    if request.user.is_authenticated and role == "student":
        learning_event = LearningEvent.objects.create(
            user=request.user,
            action="completed",
            element_name="game",
            lesson=request.POST.get('lesson'),
            score=request.POST.get('score')
        )
        learning_event.save()

    return HttpResponse('')


def updateProgress(request):
    """this responds to the AJAX request for enabling the next lesson"""

    next_slide = request.user.profile.active_slide + 1
    current_lesson = request.user.profile.active_lesson

    current_lesson = Lesson.objects.get(lesson_order=current_lesson)

    if next_slide > len(Slide.objects.filter(lesson=current_lesson.pk)):
        next_slide = 1
        request.user.profile.active_lesson += 1

    request.user.profile.active_slide = next_slide

    request.user.profile.save()

    return HttpResponse('')

@login_required
def dashboard(request):

    """user dashboard page"""

    if request.user.profile.role == 'student':
        context = {
            'lesson': Lesson.objects.get(lesson_order=request.user.profile.active_lesson),
            'activeSlide': request.user.profile.active_slide,
            'percentComplete': getPercentComplete(request.user),
            'courseProgress': getCourseProgress(request.user)
        }

        return render(request, 'lessons/dashboard.html', context)
    elif request.user.profile.role == 'teacher':

        sections = Section.objects.filter(teacher=request.user).order_by('section_class__school')

        for section in sections:
            section.fullname = str(section)

            # to be changed when implementing auto mode
            section.active_lesson = section.section_class.manual_unlock_lesson

            # to be changed when implementing scheduled classes
            section.scheduled_time = section.section_class.schedule_description

            section.classid = section.section_class.pk

        context = {
            'sections': sections
        }
        return render(request, 'lessons/teacher_dashboard.html', context)

@login_required
def overview(request, classid):

    """displays the overview of a class of students, including progress on the LMS"""

    all_sections = Section.objects.filter(teacher=request.user).order_by('section_class__school')

    counter = 0
    for section in all_sections:
        if section.section_class.pk == int(classid):
            this_section_number = counter
        counter += 1

    if this_section_number < len(all_sections) - 1:
        next_section = all_sections[this_section_number + 1]
    else:
        next_section = None
    if this_section_number > 0:
        previous_section = all_sections[this_section_number - 1]
    else:
        previous_section = None

    this_class = Class.objects.get(pk=classid)
    sections = Section.objects.filter(section_class=this_class)
    students = User.objects.filter(profile__section__in=sections).order_by('last_name')

    for student in students:
        student.matrix = []
        if student.profile.active_lesson > 1:
            for _ in range(student.profile.active_lesson - 1):
                student.matrix.append('complete')
        student.matrix.append('started')
        if student.profile.active_lesson < 6:
            for _ in range(6 - student.profile.active_lesson):
                student.matrix.append('locked')

    scheduled_lessons = Ke.objects.filter(ke_class=this_class)

    form = UnlockLessonForm()

    context = {
        'class': this_class,
        'students': students,
        'scheduled_lessons': scheduled_lessons,
        'classid': classid,
        'next_section': next_section,
        'previous_section': previous_section,
        'form': form
        }
    return render(request, 'lessons/overview.html', context)

def unlock(request, classid):

    """deals with the form on the overview page that sets manual lesson unlock"""

    this_class = Class.objects.get(pk=classid)
    form = UnlockLessonForm(request.POST)

    if form.is_valid():
        this_class.manual_unlock_enabled = True
        this_class.manual_unlock_lesson = form.cleaned_data['lesson_to_unlock']
        this_class.save()

    return HttpResponseRedirect(reverse('overview', kwargs={'classid': classid}))

def setauto(request, classid):

    """sets auto unlock mode on overview page"""

    this_class = Class.objects.get(pk=classid)
    this_class.manual_unlock_enabled = False
    this_class.save()

    return HttpResponseRedirect(reverse('overview', kwargs={'classid': classid}))

@login_required
def details(request, userid):

    """displays detailed student report"""

    student = User.objects.get(pk=userid)
    section = str(student.profile.section)
    course_completion = getCourseProgress(student)
    return_page = student.profile.section.section_class.pk
    activity = LearningEvent.objects.filter(user=student)
    for event in activity:
        event.description = str(event)

    context = {
        'student': student,
        'section': section,
        'course_completion': course_completion,
        'activity': activity,
        'return_page': return_page
        }

    return render(request, 'lessons/details.html', context)

@login_required
def schedule(request, classid):

    """displays the scheduled lessons for a class. GET only. """

    this_class = Class.objects.get(pk=classid)
    this_class.title = str(this_class)
    scheduled_lessons = Ke.objects.filter(ke_class=this_class)

    form = CreateWeeklyScheduleForm()
    update_form = UpdateKeForm()
    custom_form = CreateCustomScheduleForm()

    context = {
        'classid': classid,
        'class': this_class,
        'scheduled_lessons': scheduled_lessons,
        'form': form,
        'update_form': update_form,
        'custom_form': custom_form
    }
    return render(request, 'lessons/schedule.html', context)

def newSchedule(request, classid):

    """creates a new weekly class schedule -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = CreateWeeklyScheduleForm(request.POST)

    if form.is_valid():

        Ke.objects.filter(ke_class=this_class).delete() # this deletes all this class's schedule

        weekday = form.cleaned_data['choose_weekdays']
        lesson_start_hour = form.cleaned_data['lesson_start_hour']
        lesson_start_min = form.cleaned_data['lesson_start_min']
        course_start_date = form.cleaned_data['course_start_date']

        createWeeklySchedule(this_class, weekday, lesson_start_hour, lesson_start_min, course_start_date)

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def createWeeklySchedule(scheduled_class, weekday, lesson_start_hour, lesson_start_min, course_start_date):

    """creates and saves a weekly schedule for a class"""

    UTC = pytz.timezone('UTC')

    startdate_weekday = course_start_date.weekday()
    dayslater = (int(weekday) - startdate_weekday) % 7
    class_date = course_start_date + timedelta(days=dayslater)

    for lesson in range(1, 7):
        event_title = " ".join([str(scheduled_class), "lesson on", str(class_date), "at", lesson_start_hour, lesson_start_min])
        new_ke = Ke.objects.create(
            title=event_title,
            ke_class=scheduled_class,
            active_lesson=lesson,
            length=60,
            datetime=datetime(class_date.year, class_date.month, class_date.day, int(lesson_start_hour), int(lesson_start_min), tzinfo=UTC)
            )
        new_ke.save()
        class_date += timedelta(days=7)

    return

def createCustomSchedule(request, classid):

    """creates a new custom class schedule -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = CreateCustomScheduleForm(request.POST)

    if form.is_valid():

        Ke.objects.filter(ke_class=this_class).delete() # this deletes all this class's schedule

        lesson_dates = [
            form.cleaned_data['lesson_1_date'],
            form.cleaned_data['lesson_2_date'],
            form.cleaned_data['lesson_3_date'],
            form.cleaned_data['lesson_4_date'],
            form.cleaned_data['lesson_5_date'],
            form.cleaned_data['lesson_6_date']
            ]

        lesson_start_hours = [
            form.cleaned_data['lesson_1_start_hour'],
            form.cleaned_data['lesson_2_start_hour'],
            form.cleaned_data['lesson_3_start_hour'],
            form.cleaned_data['lesson_4_start_hour'],
            form.cleaned_data['lesson_5_start_hour'],
            form.cleaned_data['lesson_6_start_hour'],
        ]

        lesson_start_mins = [
            form.cleaned_data['lesson_1_start_min'],
            form.cleaned_data['lesson_2_start_min'],
            form.cleaned_data['lesson_3_start_min'],
            form.cleaned_data['lesson_4_start_min'],
            form.cleaned_data['lesson_5_start_min'],
            form.cleaned_data['lesson_6_start_min'],
        ]

        UTC = pytz.timezone('UTC')

        for lesson in range(6):
            event_title = " ".join([str(this_class), "lesson on", str(lesson_dates[lesson]), "at", lesson_start_hours[lesson], lesson_start_mins[lesson]])
            new_ke = Ke.objects.create(
                title=event_title,
                ke_class=this_class,
                active_lesson=lesson + 1,
                length=60,
                datetime=datetime(lesson_dates[lesson].year, lesson_dates[lesson].month, lesson_dates[lesson].day, int(lesson_start_hours[lesson]), int(lesson_start_mins[lesson]), tzinfo=UTC)
                )
            new_ke.save()

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def updateSchedule(request, classid, keid):

    """updates a scheduled class with a new time -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = UpdateKeForm(request.POST)

    if form.is_valid():
        lesson_date = form.cleaned_data['lesson_date']
        lesson_start_hour = int(form.cleaned_data['lesson_start_hour'])
        lesson_start_min = int(form.cleaned_data['lesson_start_min'])

        ke = Ke.objects.get(ke_class=this_class, active_lesson=keid)

        ke.title = " ".join([str(this_class), "lesson on", str(lesson_date), "at", str(lesson_start_hour), str(lesson_start_min)])

        ke.datetime = ke.datetime.replace(
            year=lesson_date.year,
            month=lesson_date.month,
            day=lesson_date.day,
            hour=lesson_start_hour,
            minute=lesson_start_min)
        ke.save()

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def getCourseProgress(user):

    """returns the user's course progress as a percentage"""

    active_slide = user.profile.active_slide
    active_lesson = Lesson.objects.get(lesson_order=user.profile.active_lesson)

    slides_in_course = len(Slide.objects.all())
    slide_count = len(Slide.objects.filter(lesson__lt=active_lesson.lesson_order)) + (active_slide - 1)
    fraction = slide_count / slides_in_course

    course_progress = int(fraction * 100)

    return course_progress

def getPercentComplete(user):

    """returns the user's lesson progress as a percentage"""

    active_slide = user.profile.active_slide
    active_lesson = Lesson.objects.get(lesson_order=user.profile.active_lesson)

    fraction = (active_slide - 1) / len(Slide.objects.filter(lesson=active_lesson.pk))

    percent_complete = int(fraction * 100)

    return percent_complete
