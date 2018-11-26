from django.shortcuts import render
from .models import Lesson, Slide, LearningEvent

def index(request):
    lessons = Lesson.objects.all()

    context = {
        'title': 'My Chinese Course',
        'lessons': lessons,
        'nextLesson': request.user.profile.next_lesson,
        'nextSlide': request.user.profile.next_slide
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

    context = {
        'slide': _slide,
        'lesson': _lesson,
        'previous_slide': int(slideid) - 1,
        'current_slide': int(slideid),
        'next_slide': int(slideid) + 1,
        'is_final_slide': is_final_slide
    }

    return render(request, 'lessons/slide.html', context)

    