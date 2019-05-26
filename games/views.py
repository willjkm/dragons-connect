"""Process the data needed for loading the games"""

from django.shortcuts import render
from lessons.models import LearningEvent, Ke
from lessons.coursecontent import getSlides
from lessons.badges import getBadges
from lessons.views import firstLockedLesson


def games(request, gameid, lessonid):

    """prepare the data to pass to the games"""

    slides = getSlides()
    current_game = slides[(int(gameid)-1)]["title"]
    file_name = slides[(int(gameid)-1)]["file_name"]

    # Load all the coin and score data for the GAMES, not the ACTIVITIES (these do not have past game data)

    game_list = [4, 5, 7, 9, 10] # these slides are the games

    if int(gameid) in game_list:

        previousGames = LearningEvent.objects.filter(user=request.user, action="completed", lesson=lessonid, element_name=current_game)

        if current_game == "Dragon Boat Race":
            top_score = 99999
        else:
            top_score = 0

        coins = 0

        for game in previousGames:
            game_coins = int(game.coins)
            if game_coins > coins:
                coins = game_coins
            if current_game == "Dragon Boat Race":
                if game.score < top_score: # less than, because lower times are better!
                    top_score = game.score
            else:
                if game.score > top_score:
                    top_score = game.score

        if current_game == "Dragon Boat Race":
            if top_score == 99999:
                top_score = 0
            top_score = top_score / 100 # converting back to milliseconds
    else:
        top_score = 0
        if request.user.profile.active_lesson > int(lessonid):
            coins = 1
        else:
            if request.user.profile.active_slide > int(gameid):
                coins = 1
            else:
                coins = 0

    if int(gameid) == 10: # decide where to route the user at the end of the lesson

        # is next lesson available to study?

        if firstLockedLesson(request.user) == int(lessonid) + 1:
            next_lesson_available = 0
        else:
            next_lesson_available = 1

        # what more coins have been won in this lesson?

        game_coins = {
            "Dragon Boat Race": 0,
            "Falling Tones": 0,
            "Fireworks": 0,
            "Blockzi": 0,
            "Quiz Time": 0
        }

        for game in LearningEvent.objects.filter(user=request.user, action="completed", lesson=int(lessonid), coins__gte=1):
            if game_coins[game.element_name] < game.coins:
                game_coins[game.element_name] = game.coins

        coin_list = [
            game_coins["Dragon Boat Race"],
            game_coins["Falling Tones"],
            game_coins["Fireworks"],
            game_coins["Blockzi"]
        ]
    else:
        next_lesson_available = 1
        coin_list = []

    badges = getBadges(request.user)

    tabs = [1, 2, 3, 4] # used for stroke order HTML page

    context = {
        'role': request.user.profile.role,
        'user': request.user,
        'lesson': lessonid,
        'top_score': top_score,
        'coins': coins,
        'file_name': file_name,
        'badges': badges,
        'tabs': tabs,
        'next_lesson_available': next_lesson_available,
        'coin_list': coin_list
    }

    if current_game == "Stroke Order":
        return render(request, 'games/strokeorder.html', context)
    else:
        return render(request, 'games/games.html', context)
