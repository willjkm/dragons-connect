"""Returns the badges a user has gained"""

# from django.contrib.auth.models import User
from .models import LearningEvent, Login

def returnCoins(user, lesson=0):

    """returns the number of coins a user has. If the lesson argument is given,
    it returns the number of coins from a specified lesson"""

    if lesson == 0:
        coins = (user.profile.active_lesson - 1) * 10
        coins += user.profile.active_slide - 1
        game_coins = {
            "Dragon Boat Race": [0] * 10,
            "Falling Tones": [0] * 10,
            "Fireworks": [0] * 10,
            "Blockzi": [0] * 10,
            "Quiz Time": [0] * 10
        }
        for game in LearningEvent.objects.filter(user=user, action="completed", coins__gt=1):
            if game_coins[game.element_name][game.lesson] < game.coins - 1:
                game_coins[game.element_name][game.lesson] = game.coins - 1
        for key in game_coins:
            coins += sum(game_coins[key])
    else:
        if user.profile.active_lesson > lesson:
            coins = 10
        elif user.profile.active_lesson < lesson:
            coins = 0
        else:
            coins = user.profile.active_slide - 1
        game_coins = {
            "Dragon Boat Race": 0,
            "Falling Tones": 0,
            "Fireworks": 0,
            "Blockzi": 0,
            "Quiz Time": 0
        }
        for game in LearningEvent.objects.filter(user=user, action="completed", lesson=lesson, coins__gt=1):
            if game_coins[game.element_name] < game.coins - 1:
                game_coins[game.element_name] = game.coins - 1
        for key in game_coins:
            coins += game_coins[key]

    return coins

def badgeData():
    """returns the data of badges"""
    return [
        {
            "name": "Bronze Dragon",
            "description": "for coming third in a Dragon Boat Race"
        },
        {
            "name": "Silver Dragon",
            "description": "for coming second in a Dragon Boat Race"
        },
        {
            "name": "Golden Dragon",
            "description": "for coming first in a Dragon Boat Race"
        },
        {
            "name": "Making Waves",
            "description": "for coming first in 3 Dragon Boat Races"
        },
        {
            "name": "Fireboat",
            "description": "for coming first in 10 Dragon Boat Races"
        },
        {
            "name": "Speed Demon",
            "description": "for finishing a race in under 20 seconds"
        },
        {
            "name": "Speed of Light",
            "description": "for finishing a race in under 15 seconds"
        },
        {
            "name": "Oars of Steel",
            "description": "for finishing a race with no errors"
        },
        {
            "name": "Bronze Bubble",
            "description": "for gaining one coin in Falling Tones"
        },
        {
            "name": "Silver Bubble",
            "description": "for gaining two coins in Falling Tones"
        },
        {
            "name": "Gold Bubble",
            "description": "for gaining three coins in Falling Tones"
        },
        {
            "name": "In the Clouds",
            "description": "for getting to level 6 in Falling Tones"
        },
        {
            "name": "Cloud 9",
            "description": "for getting to level 9 in Falling Tones"
        },
        {
            "name": "Perfect Pitch",
            "description": "for scoring a maximum 500 in Falling Tones"
        },
        {
            "name": "Make it Rain",
            "description": "for getting three coins in two levels of Falling Tones"
        },
        {
            "name": "Whirlwind",
            "description": "for getting at least two coins in three levels of Falling Tones"
        },
        {
            "name": "Lightning",
            "description": "for getting five tones correct in a row"
        },
        {
            "name": "Perfect Storm",
            "description": "for getting ten tones correct in a row"
        },
        {
            "name": "Flying Start",
            "description": "for getting started learning Chinese"
        },
        {
            "name": "Level Up",
            "description": "for completing a lesson"
        },
        {
            "name": "Gold Coin",
            "description": "for completing a lesson with at least 15 coins"
        },
        {
            "name": "Super Coin",
            "description": "for completing a lesson with a maximum 20 coins"
        },
        {
            "name": "Reach for the Stars",
            "description": "for completing three lessons"
        },
        {
            "name": "Pile of Cash",
            "description": "for gaining 15 coins"
        },
        {
            "name": "Bags of Money",
            "description": "for gaining 35 coins"
        },
        {
            "name": "Vault of Gold",
            "description": "for gaining 55 coins"
        },
        {
            "name": "Green Bamboo",
            "description": "for re-attempting the same game"
        },
        {
            "name": "Gold Bamboo",
            "description": "for re-attempting the same game five times"
        },
        {
            "name": "Red Bamboo",
            "description": "for re-attempting the same game ten times"
        },
        {
            "name": "Blue Moon",
            "description": "for turning the moon blue in Fireworks"
        },
        {
            "name": "Bronze Rocket",
            "description": "for gaining one coin in Fireworks"
        },
        {
            "name": "Silver Rocket",
            "description": "for gaining two coins in Fireworks"
        },
        {
            "name": "Gold Rocket",
            "description": "for gaining three coins in Fireworks"
        },
        {
            "name": "Sparkle",
            "description": "for a perfect score in Fireworks"
        },
        {
            "name": "Shimmer",
            "description": "for gaining three coins on two levels of Fireworks"
        },
        {
            "name": "Golden Shimmer",
            "description": "for gaining three coins on three levels of Fireworks"
        },
        {
            "name": "Rough Diamond",
            "description": "for gaining one coin in Blockzi"
        },
        {
            "name": "Polished Stone",
            "description": "for gaining two coins in Blockzi"
        },
        {
            "name": "Shining Gem",
            "description": "for gaining three coins in Blockzi"
        },
        {
            "name": "Precious Jade",
            "description": "for scoring over 140 in Blockzi"
        },
        {
            "name": "Rare Jade",
            "description": "for scoring over 160 in Blockzi"
        },
        {
            "name": "Gold Ingot",
            "description": "for completing Blockzi with no errors"
        },
        {
            "name": "Mindfulness",
            "description": "for completing Quiz Time with no errors"
        },
        {
            "name": "Brilliant Mind",
            "description": "for completing two quizzes with at least two coins"
        },
        {
            "name": "Shining Light",
            "description": "for completing three quizzes with three coins"
        },
        {
            "name": "Red Lantern",
            "description": "for logging in on two consecutive days"
        },
        {
            "name": "Blue Lantern",
            "description": "for logging in on three consecutive days"
        },
        {
            "name": "Green Lantern",
            "description": "for logging in on four days in the same week"
        },
        {
            "name": "White Lantern",
            "description": "for logging in after 5pm"
        },
        {
            "name": "Yellow Lantern",
            "description": "for logging in on any ten days"
        }
    ]

def getBadges(user):

    """Returns the badges a user has gained"""

    badges = badgeData()

    index = 1
    for badge in badges:
        badge["file"] = "badge-" + str(index) + ".png"
        badge["file_disabled"] = "badge-" + str(index) + "-d.png"
        index += 1

    myBadges = []

    events = LearningEvent.objects.filter(user=user)

    if events.filter(element_name="Dragon Boat Race", coins=1).count() > 0:
        myBadges.append(badges[0])

    if events.filter(element_name="Dragon Boat Race", coins=2).count() > 0:
        myBadges.append(badges[1])

    if events.filter(element_name="Dragon Boat Race", coins=3).count() > 0:
        myBadges.append(badges[2])

    if events.filter(element_name="Dragon Boat Race", coins=3).count() > 2:
        myBadges.append(badges[3])

    if events.filter(element_name="Dragon Boat Race", coins=3).count() > 9:
        myBadges.append(badges[4])

    if events.filter(element_name="Dragon Boat Race", score__lt=2000).count() > 0:
        myBadges.append(badges[5])

    if events.filter(element_name="Dragon Boat Race", score__lt=1500).count() > 0:
        myBadges.append(badges[6])

    specialAwards = events.filter(action="awarded")
    if specialAwards.count() > 0:
        badgesToAward = []
        for award in specialAwards:
            if badgesToAward.count(award.element_name) == 0:
                badgesToAward.append(award.element_name)
        for element in badgesToAward:
            myBadges.append(badges[int(element)])

    if events.filter(element_name="Falling Tones", coins=1).count() > 0:
        myBadges.append(badges[8])

    if events.filter(element_name="Falling Tones", coins=2).count() > 0:
        myBadges.append(badges[9])

    FT_golds = events.filter(element_name="Falling Tones", coins=3)
    if FT_golds.count() > 0:
        myBadges.append(badges[10])
        levels = []
        for event in FT_golds:
            if levels.count(event.lesson) == 0:
                levels.append(event.lesson)
        if len(levels) > 1:
            myBadges.append(badges[14])


    if events.filter(element_name="Falling Tones", score__gt=149).count() > 0:
        myBadges.append(badges[11])

    if events.filter(element_name="Falling Tones", score__gt=239).count() > 0:
        myBadges.append(badges[12])

    if events.filter(element_name="Falling Tones", score=500).count() > 0:
        myBadges.append(badges[13])

    # for badge 14, see badge 10

    FT_silver_or_gold = events.filter(element_name="Falling Tones", coins__gt=1)
    if FT_silver_or_gold.count() > 0:
        levels = []
        for event in FT_silver_or_gold:
            if levels.count(event.lesson) == 0:
                levels.append(event.lesson)
        if len(levels) > 2:
            myBadges.append(badges[15])

    myBadges.append(badges[18])

    if user.profile.active_lesson > 1:
        myBadges.append(badges[19])
        topCoins = 0
        for lesson in range(1, user.profile.active_lesson):
            lessonCoins = returnCoins(user, lesson)
            if returnCoins(user, lesson) > topCoins:
                topCoins = lessonCoins
        if topCoins >= 15:
            myBadges.append(badges[20])
        if topCoins >= 20:
            myBadges.append(badges[21])

    if user.profile.active_lesson > 3:
        myBadges.append(badges[22])

    myCoins = returnCoins(user)
    if myCoins > 15:
        myBadges.append(badges[23])

    if myCoins > 35:
        myBadges.append(badges[24])

    if myCoins > 55:
        myBadges.append(badges[25])

    attempts = {
        "Dragon Boat Race": [0] * 10,
        "Falling Tones": [0] * 10,
        "Fireworks": [0] * 10,
        "Blockzi": [0] * 10,
        "Quiz Time": [0] * 10,
    }

    validGameNames = [
        "Dragon Boat Race",
        "Falling Tones",
        "Fireworks",
        "Blockzi",
        "Quiz Time"
    ]

    maxAttempts = 0

    gameEvents = events.filter(action="completed")

    for event in gameEvents:
        if validGameNames.count(event.element_name):
            attempts[event.element_name][int(event.lesson)] += 1
    for key, value in attempts.items():
        maxValue = max(value)
        if maxValue > maxAttempts:
            maxAttempts = maxValue
    if maxAttempts > 1:
        myBadges.append(badges[26])
    if maxAttempts > 4:
        myBadges.append(badges[27])
    if maxAttempts > 9:
        myBadges.append(badges[28])

    if events.filter(element_name="Fireworks", coins=1).count() > 0:
        myBadges.append(badges[30])

    if events.filter(element_name="Fireworks", coins=2).count() > 0:
        myBadges.append(badges[31])

    FW_golds = events.filter(element_name="Fireworks", coins=3)
    if FW_golds.count() > 0:
        myBadges.append(badges[32])
        levels = []
        for event in FW_golds:
            if levels.count(event.lesson) == 0:
                levels.append(event.lesson)
        if len(levels) > 1:
            myBadges.append(badges[34])
        if len(levels) > 2:
            myBadges.append(badges[35])

    if events.filter(element_name="Fireworks", score=160).count() > 0:
        myBadges.append(badges[33])

    if events.filter(element_name="Blockzi", coins=1).count() > 0:
        myBadges.append(badges[36])

    if events.filter(element_name="Blockzi", coins=2).count() > 0:
        myBadges.append(badges[37])

    if events.filter(element_name="Blockzi", coins=3).count() > 0:
        myBadges.append(badges[38])

    if events.filter(element_name="Blockzi", score__gt=139).count() > 0:
        myBadges.append(badges[39])

    if events.filter(element_name="Blockzi", score__gt=159).count() > 0:
        myBadges.append(badges[40])

    if events.filter(element_name="Quiz Time", score=90).count() > 0:
        myBadges.append(badges[42])

    QT_silver_or_gold = events.filter(element_name="Quiz Time", coins__gt=1)
    if QT_silver_or_gold.count() > 0:
        levels = []
        for event in QT_silver_or_gold:
            if levels.count(event.lesson) == 0:
                levels.append(event.lesson)
        if len(levels) > 1:
            myBadges.append(badges[43])

    if events.filter(element_name="Quiz Time", coins=3).count() > 2:
        myBadges.append(badges[44])

    logins = Login.objects.filter(user=user)

    loggedInAfterHours = False
    twoDaysRunning = False
    threeDaysRunning = False
    fourDaysinWeek = False
    myDays = []

    for login in logins:
        if login.datetime.hour > 16:
            loggedInAfterHours = True
        loginDate = login.datetime.date()
        if myDays.count(loginDate) == 0:
            myDays.append(loginDate)

    for i in range(len(myDays)):
        if i > 0:
            delta = (myDays[i] - myDays[i-1]).days
            if delta == 1:
                twoDaysRunning = True
                delta = (myDays[i-1] - myDays[i-2]).days
                if i > 1:
                    if delta == 1:
                        threeDaysRunning = True
        if i > 3:
            delta = (myDays[i] - myDays[i-3]).days
            if delta < 7:
                fourDaysinWeek = True

    if len(myDays) >= 9:
        myBadges.append(badges[49])

    if twoDaysRunning:
        myBadges.append(badges[45])

    if threeDaysRunning:
        myBadges.append(badges[46])

    if fourDaysinWeek:
        myBadges.append(badges[47])

    if loggedInAfterHours:
        myBadges.append(badges[48])

    return myBadges
