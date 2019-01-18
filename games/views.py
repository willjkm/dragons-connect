from django.shortcuts import render

def demoGame(request):

    context = {
        'title': 'Demo Game',
        'role': request.user.profile.role,
        'user': request.user
    }

    return render(request, 'games/demogame.html', context)
