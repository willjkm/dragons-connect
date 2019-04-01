"""Returns the lesson and slide information for the course"""

def getLessons():

    """returns a dictionary of all the lessons"""

    result = [
        {
            "title": "How are you?",
            "description": "Learn how to greet your friends and ask how they are.",
        },
        {
            "title": "Happy birthday!",
            "description": "Learn how to say happy birthday in Chinese, as well as giving and receiving presents politely.",
        },
        {
            "title": "Count to 10",
            "description": "Counting is easy in Chinese. If you can count to 10, then you can count to 99!",
        },
        {
            "title": "Where are you going?",
            "description": "Say where you are going, and ask your friends where they are going.",
        },
        {
            "title": "Do you have...?",
            "description": "Learn how to say you have something, and ask if someone has something.",
        },
        {
            "title": "Let's go!",
            "description": "Learn how to make suggestions, and use plural pronouns.",
        },
        {
            "title": "This is my family.",
            "description": "Learn how to introduce people and talk about members of the family. Also, learn about Chinese names.",
        },
        {
            "title": "What are you eating?",
            "description": "Learn some common words for food and drink that you will find in China.",
        },
        {
            "title": "I live in Beijing.",
            "description": "Learn to talk about your age, and where you live. Also, learn the order of place names in Chinese.",
        },
        {
            "title": "What are you doing?",
            "description": "Talk about common activities, and use the negative to say what you won't do.",
        },
    ]

    for i, lesson in enumerate(result, start=1):
        lesson["number"] = i
        lesson["image"] = "../../../media/images/lessonimage" + str(i) + ".png"

    return result

def getSlides():

    """returns a list of slides which appear in every lesson"""

    result = [
        {
            "title": "Culture",
            "file_name": "culture.js"
        },
        {
            "title": "Dialogue",
            "file_name": ""
        },
        {
            "title": "Review",
            "file_name": "review.js"
        },
        {
            "title": "Dragon Boat Race",
            "file_name": "dragonboatrace.js"
        },
        {
            "title": "Falling Tones",
            "file_name": "fallingtones.js"
        },
        {
            "title": "Pinyin",
            "file_name": "pinyin.js"
        },
        {
            "title": "Fireworks",
            "file_name": "fireworks.js"
        },
        {
            "title": "Stroke Order",
            "file_name": "strokeorder.js"
        },
        {
            "title": "Blockzi",
            "file_name": "blockzi.js"
        },
        {
            "title": "Quiz Time",
            "file_name": "quiztime.js"
        },
        {
            "title": "Stroke Order Ending",
            "file_name": "strokeorderending.js"
        }
    ]

    for i, slide in enumerate(result, start=1):
        slide["number"] = i

    return result
