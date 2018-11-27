from django.shortcuts import render
from .models import Lesson, Slide, LearningEvent
from django.http import HttpResponse

def index(request):
    lessons = Lesson.objects.all()

    current_slide = request.user.profile.next_slide
    current_lesson = request.user.profile.next_lesson

    _lesson = Lesson.objects.get(lesson_order=current_lesson)

    fraction = (current_slide - 1) / len(Slide.objects.filter(lesson=_lesson.pk))

    percentComplete = int(fraction * 100)

    context = {
        'title': 'Introduction to Chinese',
        'lessons': lessons,
        'nextLesson': request.user.profile.next_lesson,
        'nextSlide': request.user.profile.next_slide,
        'percentComplete': percentComplete
    }

    return render(request, 'lessons/index.html', context)

def slide(request, lessonid, slideid):

    # Choose the current lesson and slide

    _lesson = Lesson.objects.get(lesson_order=lessonid)
    _slide = Slide.objects.filter(lesson=_lesson.pk)[int(slideid)-1]

    # Create new learning event for a logged in user viewing the slide

    if request.user.is_authenticated and str(request.user.profile.role) == "student":
        learningEvent = LearningEvent.objects.create(
            user = request.user,
            action = "viewed slide",
            element_name = str(_lesson.lesson_order + int(slideid)/100),
            slide = slideid,
            lesson = _lesson.lesson_order
        )
        learningEvent.save()

    # Determine if this is the final slide or not

    if int(slideid) == len(Slide.objects.filter(lesson=_lesson.pk)):
        is_final_slide = True
    else:
        is_final_slide = False

    # Determine if the next slide is available to learn when the page loads

    if _lesson.lesson_order == request.user.profile.next_lesson and int(slideid) == request.user.profile.next_slide:
        next_slide_is_available = False
    else:
        next_slide_is_available = True

    context = {
        'slide': _slide,
        'lesson': _lesson,
        'next_lesson': _lesson.lesson_order + 1,
        'previous_slide': int(slideid) - 1,
        'current_slide': int(slideid),
        'next_slide': int(slideid) + 1,
        'is_final_slide': is_final_slide,
        'next_slide_is_available': next_slide_is_available,
        'role': str(request.user.profile.role)
    }

    return render(request, 'lessons/slide.html', context)

def updateProgress(request): # this responds to the AJAX request for enabling the next lesson

    next_slide = request.user.profile.next_slide
    current_lesson = request.user.profile.next_lesson

    next_slide += 1

    _lesson = Lesson.objects.get(lesson_order=current_lesson)

    if next_slide > len(Slide.objects.filter(lesson=_lesson.pk)):
        next_slide = 1
        request.user.profile.next_lesson += 1

    request.user.profile.next_slide = next_slide

    request.user.profile.save()

    return HttpResponse('')
