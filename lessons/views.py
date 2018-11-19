from django.shortcuts import render
from .models import Lesson, Slide

def index(request):
    lessons = Lesson.objects.all()

    context = {
        'title': 'My Chinese Course',
        'lessons': lessons
    }

    return render(request, 'lessons/index.html', context)

def slide(request, lessonid, slideid):

    _lesson = Lesson.objects.get(lesson_order=lessonid)
    _slide = Slide.objects.filter(lesson=_lesson.pk)[int(slideid)-1]

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

    