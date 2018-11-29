from django.shortcuts import render
from .models import Lesson, Slide, LearningEvent, Section, Class, School
from django.http import HttpResponse
from time import strftime

def index(request):

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

    # Find the current lesson and slide

    currentLesson = Lesson.objects.get(lesson_order=lessonid)
    currentSlideNumber = int(slideid)
    currentSlide = Slide.objects.filter(lesson=currentLesson.pk)[currentSlideNumber-1]
    role = request.user.profile.role
   
    # Determine if this is the final slide or not

    if currentSlideNumber == len(Slide.objects.filter(lesson=currentLesson.pk)):
        is_final_slide = True
    else:
        is_final_slide = False

    # Determine if the next slide is available to learn when the page loads

    if currentLesson.lesson_order == request.user.profile.active_lesson and currentSlideNumber == request.user.profile.active_slide:
        next_slide_is_available = False
    else:
        next_slide_is_available = True
 
    # Create new learning event for a logged in student viewing the slide

    if request.user.is_authenticated and role == "student":
        learningEvent = LearningEvent.objects.create(
            user = request.user,
            action = "viewed",
            element_name = " ".join(["Lesson", str(currentLesson.lesson_order), "Slide", slideid]),
            slide = currentSlideNumber,
            lesson = currentLesson.lesson_order
        )
        learningEvent.save()

    thisLessonSlides = Slide.objects.filter(lesson=currentLesson.pk)
    counter = 1
    for s in thisLessonSlides:
        s.position = counter
        counter += 1

    context = {
        'slides': thisLessonSlides,
        'slide': currentSlide,
        'lesson': currentLesson,
        'activeLesson': request.user.profile.active_lesson,
        'activeSlide': request.user.profile.active_slide,
        'next_lesson': currentLesson.lesson_order + 1,
        'previous_slide': currentSlideNumber - 1,
        'current_slide': currentSlideNumber,
        'next_slide': currentSlideNumber + 1,
        'is_final_slide': is_final_slide,
        'next_slide_is_available': next_slide_is_available,
        'role': role
    }

    return render(request, 'lessons/slide.html', context)

def updateProgress(request): # this responds to the AJAX request for enabling the next lesson

    next_slide = request.user.profile.active_slide + 1
    current_lesson = request.user.profile.active_lesson

    currentLesson = Lesson.objects.get(lesson_order=current_lesson)

    if next_slide > len(Slide.objects.filter(lesson=currentLesson.pk)):
        next_slide = 1
        request.user.profile.active_lesson += 1

    request.user.profile.active_slide = next_slide

    request.user.profile.save()

    return HttpResponse('')

def dashboard(request):
   
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
            weekday = section.section_class.get_class_weekday_display()
            sectiontime = section.section_class.class_time.strftime("%H:%M")
            section.scheduled_time = " ".join([weekday, str(sectiontime)])

        context = {
            'sections': sections
        }
        return render(request, 'lessons/teacher_dashboard.html', context)


def getCourseProgress(user):

    activeSlide = user.profile.active_slide
    activeLesson = Lesson.objects.get(lesson_order=user.profile.active_lesson)

    slidesInCourse = len(Slide.objects.all())
    slideCount = len(Slide.objects.filter(lesson__lt=activeLesson.lesson_order)) + (activeSlide - 1)
    fraction = slideCount / slidesInCourse

    courseProgress = int(fraction * 100)

    return courseProgress

def getPercentComplete(user):
    
    activeSlide = user.profile.active_slide
    activeLesson = Lesson.objects.get(lesson_order=user.profile.active_lesson)

    fraction = (activeSlide - 1) / len(Slide.objects.filter(lesson=activeLesson.pk))

    percentComplete = int(fraction * 100)

    return percentComplete