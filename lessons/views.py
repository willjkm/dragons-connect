"""Views organizes and provides data for HTTP requests"""

from math import floor
from datetime import datetime, timedelta
from random import shuffle
from statistics import mean
import json
from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.urls import reverse
from django.utils import timezone
from django.contrib.auth.models import User
import pytz
from .models import LearningEvent, Section, Class, Ke, Login
from .forms import CreateWeeklyScheduleForm, UpdateKeForm, CreateCustomScheduleForm, UnlockLessonForm, CreateStudentsTool, UpdateNicknameForm
from .coursecontent import getLessons, getSlides
from .badges import getBadges, returnCoins, badgeData

def home(request):

    """Dragons Connect homepage - either login or, for logged in students, get redirected to the dashboard"""

    if request.user.is_authenticated and request.user.profile.role == "student":
        return redirect('/dashboard/')
    else:
        return redirect('%s?next=%sdashboard' % (settings.LOGIN_URL, request.path))

def firstLockedLesson(user):

    """returns the first lesson that is locked and not accessible by the student"""

    my_section = user.profile.section
    my_class = my_section.section_class

    if my_class.manual_unlock_enabled:
        first_locked_lesson = my_class.manual_unlock_lesson + 1
    else:
        future_scheduled_lessons = Ke.objects.filter(ke_class=my_class).filter(datetime__gte=timezone.now())
        if future_scheduled_lessons:
            first_locked_lesson = future_scheduled_lessons[0].active_lesson
        else:
            first_locked_lesson = None

    if first_locked_lesson:
        return first_locked_lesson
    else:
        return 100

@login_required
def index(request):

    """Index of lessons page"""

    nextLessonLocked = False
    if request.user.profile.role == "student":
        first_locked_lesson = firstLockedLesson(request.user)
        if first_locked_lesson <= request.user.profile.active_lesson:
            nextLessonLocked = True

    lessons = getLessons()
    for lesson in lessons:
        lesson["coins"] = returnCoins(request.user, lesson["number"])

    context = {
        'title': 'Introduction to Chinese',
        'role': request.user.profile.role,
        'lessons': lessons,
        'activeLesson': request.user.profile.active_lesson,
        'activeSlide': request.user.profile.active_slide,
        'percentComplete': getPercentComplete(request.user),
        'nextLessonLocked': nextLessonLocked,
        'coins': returnCoins(request.user)
    }

    return render(request, 'lessons/index.html', context)

@login_required
def slide(request, lessonid, slideid):

    """Lesson content pages"""

    lessons = getLessons()
    slides = getSlides()

    slides[3]["title"] = "Boat Race" # Changes name to fit on sidebar.

    # Find the current lesson and slide

    current_lesson = lessons[int(lessonid)-1]

    # Determine if this is the final slide or not

    if int(slideid) == 10: #len(Slide.objects.filter(lesson=current_lesson.pk)):
        is_final_slide = True
    else:
        is_final_slide = False

    # Determine if the next slide is available to learn when the page loads

    can_unlock_next_slide = True
    next_slide_is_available = True
    if request.user.profile.role == "student":
        first_locked_lesson = firstLockedLesson(request.user)

        if current_lesson["number"] == request.user.profile.active_lesson:
            if int(slideid) == request.user.profile.active_slide:
                next_slide_is_available = False
            if first_locked_lesson == current_lesson["number"] + 1 and is_final_slide:
                next_slide_is_available = False
                can_unlock_next_slide = False

    # URL content for slides

    if int(slideid) == 2:
        youtubeCodes = ["oNr8k6lvBi4", "SPBTKCStX04", "J4hBY7aQw2A", "nyR6_ZKZ6d4", "D0hcrPY0atA"]
        thisLessonCode = youtubeCodes[int(lessonid)-1]
        url = "https://www.youtube.com/embed/" + thisLessonCode
    else:
        url = "../../../games/" + slideid + "/" + str(current_lesson["number"]) + "/"

    # Create new learning event for a logged in student viewing the slide

    if request.user.is_authenticated and request.user.profile.role == "student":
        learning_event = LearningEvent.objects.create(
            user=request.user,
            action="viewed",
            element_name=" ".join(["Lesson", str(current_lesson["number"]), "Slide", slideid]),
            slide=int(slideid),
            lesson=current_lesson["number"]
        )
        learning_event.save()

    # if slide is a video slide, make the next slide available, and advance the student progress

    if request.user.profile.role == 'student':
        if int(slideid) == 2: # if this is the video slide
            next_slide_is_available = True
            if current_lesson["number"] == request.user.profile.active_lesson:
                if int(slideid) == request.user.profile.active_slide:
                    next_slide = request.user.profile.active_slide + 1
                    request.user.profile.active_slide = next_slide
                    request.user.profile.save()

    # catch students typing in URL of unlocked lessons -> return to dashboard

    redirect_to_dashboard = False
    if request.user.profile.role == 'student':
        if current_lesson["number"] > request.user.profile.active_lesson:
            redirect_to_dashboard = True
        elif current_lesson["number"] == request.user.profile.active_lesson:
            if int(slideid) > request.user.profile.active_slide:
                redirect_to_dashboard = True

    context = {
        'slides': slides[:-1],
        'current_slide': slides[int(slideid) - 1],
        'lesson': current_lesson,
        'lesson_number': current_lesson["number"],
        'active_lesson': request.user.profile.active_lesson,
        'active_slide': request.user.profile.active_slide,
        'next_lesson_number': current_lesson["number"] + 1,
        'previous_slide_number': int(slideid) - 1,
        'current_slide_number': int(slideid),
        'next_slide_number': int(slideid) + 1,
        'is_final_slide': is_final_slide,
        'next_slide_is_available': next_slide_is_available,
        'can_unlock_next_slide': can_unlock_next_slide,
        'role': request.user.profile.role,
        'url': url,
        'coins': returnCoins(request.user)
    }

    if redirect_to_dashboard:
        return redirect('/dashboard/')
    else:
        return render(request, 'lessons/slide.html', context)

def gameOver(request):

    """this processes the info submitted by the game when gameover"""

    role = request.user.profile.role

    if request.user.is_authenticated and role == "student":
        learning_event = LearningEvent.objects.create(
            user=request.user,
            action="completed",
            element_name=request.POST.get('element_name'),
            lesson=request.POST.get('lesson'),
            score=request.POST.get('score'),
            coins=request.POST.get('coins')
        )
        learning_event.save()

    return HttpResponse('')

def specialAward(request):

    """this processes the special info submitted by the game when gameover"""

    role = request.user.profile.role

    if request.user.is_authenticated and role == "student":
        learning_event = LearningEvent.objects.create(
            user=request.user,
            action="awarded",
            element_name=request.POST.get('element_name'),
            lesson=request.POST.get('lesson'),
        )
        learning_event.save()

    return HttpResponse('')

def returnBadgesToGame(request):

    """this responds to a game request for user badges"""

    # badges = json.JSONEncoder().encode(getBadges(request.user))

    myBadges = getBadges(request.user)

    return JsonResponse({"badges": myBadges}, safe=False)


def updateProgress(request):
    """this responds to the AJAX request for enabling the next lesson"""

    next_slide = request.user.profile.active_slide + 1

    if next_slide > 10:
        next_slide = 1
        request.user.profile.active_lesson += 1

    request.user.profile.active_slide = next_slide

    request.user.profile.save()

    return HttpResponse('')

@login_required
def dashboard(request):

    """user dashboard page"""

    if request.user.profile.role == 'student':

        lessons = getLessons()

        active_lesson_number = request.user.profile.active_lesson
        active_slide = request.user.profile.active_slide
        active_lesson = lessons[active_lesson_number-1]
        first_locked_lesson = firstLockedLesson(request.user)
        lesson_locked = False
        completed_quizzes = LearningEvent.objects.filter(user=request.user, action="completed", element_name="Quiz Time", lesson=int(active_lesson_number), coins__gte=1).count()

        # what to do if the student has completed the active lesson

        if completed_quizzes > 0:
            if first_locked_lesson == active_lesson_number + 1: # if the next lesson is locked
                lesson_locked = True
            else: # if the next lesson is available we need to update the student's progress and show the next lesson
                active_lesson = lessons[active_lesson_number]
                active_slide = 1
                # update the progress
                request.user.profile.active_lesson += 1
                request.user.profile.active_slide = 1
                request.user.profile.save()

        coins = returnCoins(request.user)

        beltNumber = int(floor(coins/10))

        belts = ["white", "bordered white", "yellow", "bordered yellow", "gold", "bordered gold", "green", "bordered green",
                 "blue", "bordered blue", "purple", "bordered purple", "brown", "bordered brown", "red", "black"]

        beltName = belts[beltNumber]

        remainingCoins = 10 - (coins % 10)

        myBadges = getBadges(request.user)

        badgesWon = len(myBadges)

        if badgesWon > 6:
            arr = [b for b in range(badgesWon)]
            shuffle(arr)
            badgesToShow = []
            for a in range(6):
                badgesToShow.append(myBadges[arr[a]])
        else:
            badgesToShow = myBadges

        # Calculate where a student should go to collect missing coins

        showCollectCoinsButton = False
        lessonRedirect = 1
        slideRedirect = 1
        game_coins = None

        if active_lesson_number > 1:
            showCollectCoinsButton = True

        if active_slide == 10:
            showCollectCoinsButton = True

        if showCollectCoinsButton:
            game_coins = {
                "Dragon Boat Race": [0, 0, 0, 0, 0],
                "Falling Tones": [0, 0, 0, 0, 0],
                "Fireworks": [0, 0, 0, 0, 0],
                "Blockzi": [0, 0, 0, 0, 0],
                "Quiz Time": [0, 0, 0, 0, 0]
            }

            # populate a list of top coins for each game

            for game in LearningEvent.objects.filter(user=request.user, action="completed", coins__gte=1):
                if game_coins[game.element_name][game.lesson-1] < game.coins:
                    game_coins[game.element_name][game.lesson-1] = game.coins

            foundPlaceToGo = False

            for i in range(5):
                if not foundPlaceToGo:
                    if game_coins["Dragon Boat Race"][i] < 3 and game_coins["Dragon Boat Race"][i] > 0:
                        lessonRedirect = i+1
                        slideRedirect = 4
                        foundPlaceToGo = True
                    elif game_coins["Falling Tones"][i] < 3 and game_coins["Falling Tones"][i] > 0:
                        lessonRedirect = i+1
                        slideRedirect = 5
                        foundPlaceToGo = True
                    elif game_coins["Fireworks"][i] < 3 and game_coins["Fireworks"][i] > 0:
                        lessonRedirect = i+1
                        slideRedirect = 7
                        foundPlaceToGo = True
                    elif game_coins["Blockzi"][i] < 3 and game_coins["Blockzi"][i] > 0:
                        lessonRedirect = i+1
                        slideRedirect = 9
                        foundPlaceToGo = True
                    elif game_coins["Quiz Time"][i] < 3 and game_coins["Quiz Time"][i] > 0:
                        lessonRedirect = i+1
                        slideRedirect = 10
                        foundPlaceToGo = True

            if foundPlaceToGo == False:
                showCollectCoinsButton = False

        context = {
            'lesson': active_lesson,
            'activeSlide': active_slide,
            'percentComplete': getPercentComplete(request.user),
            'courseProgress': getCourseProgress(request.user),
            'lesson_locked' : lesson_locked,
            'coins': coins,
            'beltNumber': beltNumber,
            'beltName': beltName,
            'remainingCoins': remainingCoins,
            'badges': badgesToShow,
            'badgesWon': badgesWon,
            'classCode': request.user.profile.classCode,
            'showCollectCoinsButton': showCollectCoinsButton,
            'lessonRedirect': lessonRedirect,
            'slideRedirect': slideRedirect,
            'debug': game_coins
        }

        return render(request, 'lessons/dashboard.html', context)
    else:
        if request.user.profile.role == 'teacher':
            sections = Section.objects.filter(teacher=request.user).order_by('section_class__school')
            title = 'Teacher Dashboard'
        else:
            sections = Section.objects.all().order_by('section_class__school')
            title = 'Administrator Dashboard'

        for section in sections:
            section.fullname = str(section)

            # students in section
            section.number_of_students = User.objects.filter(profile__section=section).count()

            # show next scheduled class -- both the time, and the lesson to be learned
            section.next_lesson = Ke.objects.filter(ke_class=section.section_class).filter(datetime__gte=timezone.now()).first()

            if section.next_lesson:
                section.display_date = section.next_lesson.datetime.date().strftime('%a %d %b')
                #section.display_date = 'display this please'
                section.display_time = section.next_lesson.datetime.time().strftime('%I:%M %p')
                section.next_lesson_number = section.next_lesson.active_lesson

            section.classid = section.section_class.pk

        form = CreateStudentsTool()

        context = {
            'title': title,
            'sections': sections,
            'role': request.user.profile.role,
            'form': form
        }
        return render(request, 'lessons/teacher_dashboard.html', context)

@login_required
def badges(request):

    """user badges page"""

    myBadges = getBadges(request.user)
    allBadges = badgeData()

    badgeNames = []

    for badge in myBadges:
        badgeNames.append(badge["name"])

    counter = 1
    for badge in allBadges:
        if badge["name"] in badgeNames:
            badge["file"] = "badge-" + str(counter) + ".png"
            badge["disabled"] = 0
        else:
            badge["file"] = "badge-" + str(counter) + "-d.png"
            badge["disabled"] = 1
        counter += 1

    context = {
        'badges': allBadges,
        'coins': returnCoins(request.user)
    }

    return render(request, 'lessons/badges.html', context)

@login_required
def overview(request, classid):

    """displays the overview of a class of students, including progress on the LMS"""

    if request.user.profile.role == 'teacher':
        all_sections = Section.objects.filter(teacher=request.user).order_by('section_class__school')
    else:
        all_sections = Section.objects.all()

    counter = 0
    for section in all_sections:
        if section.section_class.pk == int(classid):
            this_section_number = counter
        counter += 1

    if this_section_number < len(all_sections) - 1:
        next_section = all_sections[this_section_number + 1]
    else:
        next_section = None
    if this_section_number > 0:
        previous_section = all_sections[this_section_number - 1]
    else:
        previous_section = None

    this_class = Class.objects.get(pk=classid)
    sections = Section.objects.filter(section_class=this_class)
    students = User.objects.filter(profile__section__in=sections).order_by('last_name')

    for student in students:
        student.matrix = []
        if student.profile.active_lesson > 1:
            for _ in range(student.profile.active_lesson - 1):
                student.matrix.append('complete')
        student.matrix.append('started')
        if student.profile.active_lesson < 6:
            for _ in range(6 - student.profile.active_lesson):
                student.matrix.append('locked')

    scheduled_lessons = Ke.objects.filter(ke_class=this_class)

    last_lesson_time = None

    for l in scheduled_lessons:
        if l.datetime < timezone.now():
            l.message = " -- Lesson occurs in past"
        if last_lesson_time:
            if l.datetime < last_lesson_time:
                l.message = "Warning: Lesson occurs out of sequence"
        last_lesson_time = l.datetime

    form = UnlockLessonForm()
    creation_form = CreateStudentsTool()

    context = {
        'class': this_class,
        'students': students,
        'scheduled_lessons': scheduled_lessons,
        'classid': classid,
        'next_section': next_section,
        'previous_section': previous_section,
        'form': form,
        'creation_form': creation_form,
        'role': request.user.profile.role
        }
    return render(request, 'lessons/overview.html', context)

def createclass(request):

    """create class tool from JSON data input of students"""

    form = CreateStudentsTool(request.POST)

    if request.method == "POST" and form.is_valid():
        section = form.cleaned_data['section']
        data = json.loads(form.cleaned_data['data'])
        newusers = []
        for row in data:
            newusers.append(User.objects.create_user(
                username=row['username'],
                email=row['email'],
                password=row['password'],
                first_name=row['first_name'],
                last_name=row['last_name']
            ))
        myindex = 0
        for user in newusers:
            user.save()
            user.profile.role = 'student'
            user.profile.active_lesson = 1
            user.profile.active_slide = 1
            user.profile.section = section
            user.profile.nickname = data[myindex]['first_name']
            user.profile.classCode = data[myindex]['class_code']
            user.profile.save()
            myindex += 1

    return HttpResponse('')

def unlock(request, classid):

    """deals with the form on the overview page that sets manual lesson unlock"""

    this_class = Class.objects.get(pk=classid)
    form = UnlockLessonForm(request.POST)

    if form.is_valid():
        this_class.manual_unlock_enabled = True
        this_class.manual_unlock_lesson = form.cleaned_data['lesson_to_unlock']
        this_class.save()

    return HttpResponseRedirect(reverse('overview', kwargs={'classid': classid}))

def setauto(request, classid):

    """sets auto unlock mode on overview page"""

    this_class = Class.objects.get(pk=classid)
    this_class.manual_unlock_enabled = False
    this_class.save()

    return HttpResponseRedirect(reverse('overview', kwargs={'classid': classid}))

@login_required
def details(request, userid):

    """displays detailed student report"""

    student = User.objects.get(pk=userid)
    section = student.profile.section
    peers = User.objects.filter(profile__section=section)

    def peerAverage(fn):
        values = []
        for peer in peers:
            values.append(fn(peer))
        return floor(mean(values))

    charts = []

    charts.append({
        "id": "courseCompletion",
        "description": "The percentage of the course that the student has completed.",
        "title": "Course Completion",
        "student_value": getCourseProgress(student),
        "peers_value": peerAverage(getCourseProgress)
    })

    charts.append({
        "id": "coinsObtained",
        "description": "The number of coins that the student has obtained.",
        "title": "Coins",
        "student_value": returnCoins(student),
        "peers_value": peerAverage(returnCoins)
    })

    def returnLoginDays(user):
        logins = Login.objects.filter(user=user)
        myDays = []
        for login in logins:
            loginDate = login.datetime.date()
            if myDays.count(loginDate) == 0:
                myDays.append(loginDate)
        return len(myDays)

    charts.append({
        "id": "loginDays",
        "description": "The number of individual days on which the student has logged in.",
        "title": "Login Days",
        "student_value": returnLoginDays(student),
        "peers_value": peerAverage(returnLoginDays)
    })

    def returnGameSessions(user):
        events = LearningEvent.objects.filter(user=user, action="completed")
        return events.count()

    charts.append({
        "id": "completedGames",
        "description": "The number of game instances which the student has completed with at least one coin.",
        "title": "Completed Games",
        "student_value": returnGameSessions(student),
        "peers_value": peerAverage(returnGameSessions)
    })

    def returnSlideViews(user):
        events = LearningEvent.objects.filter(user=user, action="viewed")
        return events.count()

    charts.append({
        "id": "slideViews",
        "description": "The total number of times the student has viewed course slides.",
        "title": "Slide Views",
        "student_value": returnSlideViews(student),
        "peers_value": peerAverage(returnSlideViews)
    })

    myBadges = getBadges(student)

    # course_completion = getCourseProgress(student)
    # course_completion_peers = []
    # for peer in peers:
    #     course_completion_peers.append(getCourseProgress(peer))
    # averageProgress = mean(course_completion_peers)
    # activity = LearningEvent.objects.filter(user=student).order_by('action_datetime').reverse()
    # datecounter = None
    # for event in activity:
    #     event.display_date = event.action_datetime.date().strftime('%d %b %Y')
    #     event.display_time = event.action_datetime.time().strftime('%H:%M')
    #     if event.action_datetime.date() != datecounter:
    #         event.firstinlist = True
    #         datecounter = event.action_datetime.date()

    return_page = student.profile.section.section_class.pk

    context = {
        'student': student,
        'section': str(section),
        'charts': charts,
        'return_page': return_page,
        'badges': myBadges
    }

    return render(request, 'lessons/details.html', context)

@login_required
def analytics(request):

    """displays a table of all student analytics on the analytics template page"""

    context = {}

    return render(request, 'lessons/analytics.html', context)

def analyticData(request):

    """this responds to a request for all student data"""

    students = User.objects.filter(profile__role="student")

    def returnLoginDays(user):
        logins = Login.objects.filter(user=user)
        myDays = []
        for login in logins:
            loginDate = login.datetime.date()
            if myDays.count(loginDate) == 0:
                myDays.append(loginDate)
        return len(myDays)

    def returnSlideViews(user):
        events = LearningEvent.objects.filter(user=user, action="viewed")
        return events.count()

    def returnGameSessions(user):
        events = LearningEvent.objects.filter(user=user, action="completed")
        return events.count()

    data = []
    counter = 0
    line_counter = 0

    for student in students:
        courseProgress = getCourseProgress(student)
        if courseProgress == 0:
            counter += 1
        else:
            line_counter += 1
            counter += 1
            badges = getBadges(student)
            data.append({
                "id": line_counter,
                "name": student.last_name + ", " + student.first_name,
                "school": str(student.profile.school),
                "myclass": str(student.profile.section.section_class),
                "teacher": student.profile.section.teacher.first_name + " " + student.profile.section.teacher.last_name,
                "courseProgress": courseProgress,
                "coins": returnCoins(student),
                "loginDays": returnLoginDays(student),
                "completedGames": returnGameSessions(student),
                "slideViews": returnSlideViews(student),
                "badges": len(badges)
            })

    return JsonResponse(data, safe=False)

@login_required
def schedule(request, classid):

    """displays the scheduled lessons for a class. GET only. """

    this_class = Class.objects.get(pk=classid)
    this_class.title = str(this_class)
    scheduled_lessons = Ke.objects.filter(ke_class=this_class)

    form = CreateWeeklyScheduleForm()
    update_form = UpdateKeForm()
    custom_form = CreateCustomScheduleForm()

    context = {
        'classid': classid,
        'class': this_class,
        'scheduled_lessons': scheduled_lessons,
        'form': form,
        'update_form': update_form,
        'custom_form': custom_form
    }
    return render(request, 'lessons/schedule.html', context)

@login_required
def updateProfile(request):

    """Update user nickname and avatar"""

    if request.method == "GET":
        form = UpdateNicknameForm()

        context = {
            'user': request.user,
            'form': form,
            'coins': returnCoins(request.user)
        }

        return render(request, 'lessons/updateprofile.html', context)

    elif request.method == "POST":
        form = UpdateNicknameForm(request.POST)

        if form.is_valid():
            request.user.profile.nickname = form.cleaned_data['nickname']
            request.user.save()

        return HttpResponseRedirect('/dashboard/updateprofile')

def changeAvatar(request):

    """Changes the user avatar"""

    if request.user.is_authenticated:
        request.user.profile.avatar = request.POST.get('avatar')
        request.user.save()

    return HttpResponse('')

def newSchedule(request, classid):

    """creates a new weekly class schedule -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = CreateWeeklyScheduleForm(request.POST)

    if form.is_valid():

        Ke.objects.filter(ke_class=this_class).delete() # this deletes all this class's schedule

        weekday = form.cleaned_data['choose_weekdays']
        lesson_start_hour = form.cleaned_data['lesson_start_hour']
        lesson_start_min = form.cleaned_data['lesson_start_min']
        course_start_date = form.cleaned_data['course_start_date']

        createWeeklySchedule(this_class, weekday, lesson_start_hour, lesson_start_min, course_start_date)

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def createWeeklySchedule(scheduled_class, weekday, lesson_start_hour, lesson_start_min, course_start_date):

    """creates and saves a weekly schedule for a class"""

    UTC = pytz.timezone('UTC')

    startdate_weekday = course_start_date.weekday()
    dayslater = (int(weekday) - startdate_weekday) % 7
    class_date = course_start_date + timedelta(days=dayslater)

    for lesson in range(1, 7):
        event_title = " ".join([str(scheduled_class), "lesson on", str(class_date), "at", lesson_start_hour, lesson_start_min])
        new_ke = Ke.objects.create(
            title=event_title,
            ke_class=scheduled_class,
            active_lesson=lesson,
            length=60,
            datetime=datetime(class_date.year, class_date.month, class_date.day, int(lesson_start_hour), int(lesson_start_min), tzinfo=UTC)
            )
        new_ke.save()
        class_date += timedelta(days=7)

    return

def createCustomSchedule(request, classid):

    """creates a new custom class schedule -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = CreateCustomScheduleForm(request.POST)

    if form.is_valid():

        Ke.objects.filter(ke_class=this_class).delete() # this deletes all this class's schedule

        lesson_dates = [
            form.cleaned_data['lesson_1_date'],
            form.cleaned_data['lesson_2_date'],
            form.cleaned_data['lesson_3_date'],
            form.cleaned_data['lesson_4_date'],
            form.cleaned_data['lesson_5_date'],
            form.cleaned_data['lesson_6_date']
            ]

        lesson_start_hours = [
            form.cleaned_data['lesson_1_start_hour'],
            form.cleaned_data['lesson_2_start_hour'],
            form.cleaned_data['lesson_3_start_hour'],
            form.cleaned_data['lesson_4_start_hour'],
            form.cleaned_data['lesson_5_start_hour'],
            form.cleaned_data['lesson_6_start_hour'],
        ]

        lesson_start_mins = [
            form.cleaned_data['lesson_1_start_min'],
            form.cleaned_data['lesson_2_start_min'],
            form.cleaned_data['lesson_3_start_min'],
            form.cleaned_data['lesson_4_start_min'],
            form.cleaned_data['lesson_5_start_min'],
            form.cleaned_data['lesson_6_start_min'],
        ]

        UTC = pytz.timezone('UTC')

        for lesson in range(6):
            event_title = " ".join([str(this_class), "lesson on", str(lesson_dates[lesson]), "at", lesson_start_hours[lesson], lesson_start_mins[lesson]])
            new_ke = Ke.objects.create(
                title=event_title,
                ke_class=this_class,
                active_lesson=lesson + 1,
                length=60,
                datetime=datetime(lesson_dates[lesson].year, lesson_dates[lesson].month, lesson_dates[lesson].day, int(lesson_start_hours[lesson]), int(lesson_start_mins[lesson]), tzinfo=UTC)
                )
            new_ke.save()

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def updateSchedule(request, classid, keid):

    """updates a scheduled class with a new time -- POST only"""

    this_class = Class.objects.get(pk=classid)
    form = UpdateKeForm(request.POST)

    if form.is_valid():
        lesson_date = form.cleaned_data['lesson_date']
        lesson_start_hour = int(form.cleaned_data['lesson_start_hour'])
        lesson_start_min = int(form.cleaned_data['lesson_start_min'])

        ke = Ke.objects.get(ke_class=this_class, active_lesson=keid)

        ke.title = " ".join([str(this_class), "lesson on", str(lesson_date), "at", str(lesson_start_hour), str(lesson_start_min)])

        ke.datetime = ke.datetime.replace(
            year=lesson_date.year,
            month=lesson_date.month,
            day=lesson_date.day,
            hour=lesson_start_hour,
            minute=lesson_start_min)
        ke.save()

    return HttpResponseRedirect(reverse('schedule', kwargs={'classid': classid}))

def getCourseProgress(user):

    """returns the user's course progress as a percentage"""

    active_slide = user.profile.active_slide
    #active_lesson = user.profile.active_lesson # Lesson.objects.get(lesson_order=user.profile.active_lesson)

    slides_in_course = 50 # this is for a 5 lesson course
    slide_count = 10 * (user.profile.active_lesson - 1) + (active_slide - 1)

    # len(Slide.objects.filter(lesson__lt=active_lesson.lesson_order)) + (active_slide - 1)

    fraction = slide_count / slides_in_course

    course_progress = int(fraction * 100)

    return course_progress

def getPercentComplete(user):

    """returns the user's lesson progress as a percentage"""

    active_slide = user.profile.active_slide
    # active_lesson = user.profile.active_lesson # Lesson.objects.get(lesson_order=user.profile.active_lesson)

    fraction = (active_slide - 1) / 10 # len(Slide.objects.filter(lesson=active_lesson.pk))

    percent_complete = int(fraction * 100)

    return percent_complete
