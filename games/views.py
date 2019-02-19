"""Process the data needed for loading the games"""

from django.shortcuts import render
from lessons.models import LearningEvent


def games(request, gameid, lessonid):

    """prepare the data to pass to the games"""

    game_list = [
        {
        "name": "race",
        "scene_name": "DragonBoatRace"
        }, 
        {
        "name": "falling tones",
        "scene_name": "FallingTones"
        },
        {
        "name": "rockets",
        "scene_name": "Rockets"
        },
        {
        "name": "characters",
        "scene_name": "Characters"
        }
    ]
    current_game = game_list[(int(gameid)-1)]["name"]
    current_scene_name = game_list[(int(gameid)-1)]["scene_name"]

    previousGames = LearningEvent.objects.filter(user=request.user, action="completed", lesson=lessonid, element_name=current_game)

    if current_game == "race":
        top_score = [99999, 99999, 99999]
    else:
        top_score = [0, 0, 0]

    coins = [0, 0, 0]

    for game in previousGames:
        game_level = int(game.award[6]) - 1
        game_coins = int(game.award[8])
        if game_coins > coins[game_level]:
            coins[game_level] = game_coins
        if current_game == "race":
            if game.score < top_score[game_level]: # less than, because lower times are better!
                top_score[game_level] = game.score
        else:
            if game.score > top_score[game_level]:
                top_score[game_level] = game.score

    if current_game == "race":
        for i in range(3):
            if top_score[i] == 99999:
                top_score[i] = 0
            top_score[i] = top_score[i] / 100

    context = {
        'role': request.user.profile.role,
        'user': request.user,
        'lesson': lessonid,
        'top_score': top_score,
        'coins': coins,
        'scene_name': current_scene_name
    }

    return render(request, 'games/games.html', context)

