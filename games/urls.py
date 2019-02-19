"""URLS route the HTTP request to the correct view."""

from django.conf.urls import url
from . import views


urlpatterns = [
    #url(r'^dragonboatgame/(?P<lessonid>\d+)/$', views.dragonBoatGame, name='dragon boat game'),
    #url(r'^fallingtones/(?P<lessonid>\d+)/$', views.fallingTones, name='falling tones'),
    #url(r'^rockets/(?P<lessonid>\d+)/$', views.rockets, name='rockets'),
    url(r'^(?P<gameid>\d+)/(?P<lessonid>\d+)/$', views.games, name='games')
]
