"""URLS route the HTTP request to the correct view. Dashbaord URL has its own file."""

from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<lessonid>\d+)/slide/(?P<slideid>\d+)$', views.slide, name='slide'),
    path('badges/', views.badges, name='badges'),
    path('ajax/updateprogress/', views.updateProgress, name='update progress'),
    path('ajax/gameover/', views.gameOver, name='game over'),
    path('ajax/specialaward/', views.specialAward, name='special award'),
    path('ajax/getbadges/', views.returnBadgesToGame, name='return badges to game')
]
