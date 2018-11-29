from django.shortcuts import render

def demoGame(request):

    context = {
        'title': 'Demo Game',
        'role': request.user.profile.role,
    }

    return render(request, 'games/demogame.html', context)
