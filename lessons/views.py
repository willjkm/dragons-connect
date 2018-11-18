from django.shortcuts import render
from .models import Lesson

def index(request):
    lessons = Lesson.objects.all()

    context = {
        'title': 'List of lessons',
        'lessons': lessons
    }

    return render(request, 'lessons/index.html', context)
    