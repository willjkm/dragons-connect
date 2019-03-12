"""Process the data needed for loading the games"""

from django.shortcuts import render
from lessons.models import LearningEvent


def games(request, gameid, lessonid):

    """prepare the data to pass to the games"""

    game_list = [
        {
            "name": "race",
            "scene_name": "DragonBoatRace",
            "file_name": "dragonboatgame.js"
        },
        {
            "name": "falling tones",
            "scene_name": "FallingTones",
            "file_name": "fallingtones.js"
        },
        {
            "name": "rockets",
            "scene_name": "Rockets",
            "file_name": "rockets.js"
        },
        {
            "name": "characters",
            "scene_name": "Characters",
            "file_name": "characters.js"
        },
        {
            "name": "unit quiz",
            "scene_name": "UnitQuiz",
            "file_name": "unitquiz.js"
        },
        {
            "name": "grammar",
            "scene_name": "Grammar",
            "file_name": "grammar.js"
        }
    ]
    current_game = game_list[(int(gameid)-1)]["name"]
    current_scene_name = game_list[(int(gameid)-1)]["scene_name"]
    file_name = game_list[(int(gameid)-1)]["file_name"]

    # Load all the coin and score data for the GAMES, not the ACTIVITIES (these do not have past game data)

    if int(gameid) <= 5:

        previousGames = LearningEvent.objects.filter(user=request.user, action="completed", lesson=lessonid, element_name=current_game)

        if current_game == "race":
            top_score = [99999, 99999, 99999]
            coins = [0, 0, 0]
        else:
            top_score = 0
            coins = 0

        if current_game == "race":
            for game in previousGames:
                game_level = int(game.award[6]) - 1 # only Dragon Boat Race has different levels
                game_coins = int(game.award[8])
                if game_coins > coins[game_level]:
                    coins[game_level] = game_coins
                if game.score < top_score[game_level]: # less than, because lower times are better!
                    top_score[game_level] = game.score
        else:
            for game in previousGames:
                game_coins = int(game.award[0])
                if game_coins > coins:
                    coins = game_coins
                if game.score > top_score:
                    top_score = game.score

        if current_game == "race":
            for i in range(3):
                if top_score[i] == 99999:
                    top_score[i] = 0
                top_score[i] = top_score[i] / 100
    else:
        top_score = 0
        coins = 0


    context = {
        'role': request.user.profile.role,
        'user': request.user,
        'lesson': lessonid,
        'top_score': top_score,
        'coins': coins,
        'scene_name': current_scene_name,
        'file_name': file_name
    }

    return render(request, 'games/games.html', context)
