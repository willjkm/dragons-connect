"""Views organizes and provides data for HTTP requests"""

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.urls import reverse
from .models import Lesson, Slide, LearningEvent, Section, Class, Ke
from .forms import CreateWeeklyScheduleForm
from datetime import datetime, timedelta
import pytz

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
        'role': role
    }

    return render(request, 'lessons/slide.html', context)

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

        sections = Section.objects.filter(teacher=request.user)

        for section in sections:
            section.fullname = str(section)

            # to be changed when implementing auto mode
            section.active_lesson = section.section_class.manual_unlock_lesson

            # to be changed when implementing scheduled classes
            section.scheduled_time = section.section_class.schedule_description

        context = {
            'sections': sections
        }
        return render(request, 'lessons/teacher_dashboard.html', context)

def schedule(request, classid):

    """displays and updates the scheduled lessons for a class """

    this_class = Class.objects.get(pk=classid)
    this_class.title = str(this_class)
    scheduled_lessons = Ke.objects.filter(ke_class=this_class)
    

    if request.method == 'POST':
        form = CreateWeeklyScheduleForm(request.POST)
        if form.is_valid():
            weekday = form.cleaned_data['choose_weekdays']
            lesson_start_hour = form.cleaned_data['lesson_start_hour']
            lesson_start_min = form.cleaned_data['lesson_start_min']
            course_start_date = form.cleaned_data['course_start_date']

            Ke.objects.filter(ke_class=this_class).delete() # this deletes all this class's schedule

            createWeeklySchedule(this_class, weekday, lesson_start_hour, lesson_start_min, course_start_date)
            
            return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))
    else:
        form = CreateWeeklyScheduleForm()

    context = {
        'class': this_class,
        'scheduled_lessons': scheduled_lessons,
        'form': form
    }
    return render(request, 'lessons/schedule.html', context)

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