"""Process the data needed for loading the games"""

from django.shortcuts import render
from lessons.models import LearningEvent

def dragonBoatGame(request, lessonid):

    """prepare the data to pass to the dragon boat game"""

    previousGames = LearningEvent.objects.filter(user=request.user, action="completed", lesson=lessonid, element_name="race")

    top_score = [99999, 99999, 99999]
    coins = [0, 0, 0]

    for game in previousGames:
        game_level = int(game.award[6]) - 1
        game_coins = int(game.award[8])
        if game.score < top_score[game_level]: # less than, because lower times are better!
            top_score[game_level] = game.score
        if game_coins > coins[game_level]:
            coins[game_level] = game_coins

    for i in range(3):
        if top_score[i] == 99999:
            top_score[i] = 0
        top_score[i] = top_score[i] / 100

    context = {
        'role': request.user.profile.role,
        'user': request.user,
        'lesson': lessonid,
        'top_score': top_score,
        'coins': coins
    }

    return render(request, 'games/dragonboatgame.html', context)


def fallingTones(request, lessonid):

    """prepare the data to pass to the falling tones game"""

    previousGames = LearningEvent.objects.filter(user=request.user, action="completed", lesson=lessonid, element_name="falling tones")

    top_score = [0, 0, 0]
    coins = [0, 0, 0]

    for game in previousGames:
        game_level = int(game.award[6]) - 1
        game_coins = int(game.award[8])
        if game.score > top_score[game_level]:
            top_score[game_level] = game.score
        if game_coins > coins[game_level]:
            coins[game_level] = game_coins

    context = {
        'role': request.user.profile.role,
        'user': request.user,
        'lesson': lessonid,
        'top_score': top_score,
        'coins': coins
    }

    return render(request, 'games/fallingtones.html', context)
