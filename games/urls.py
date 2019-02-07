"""URLS route the HTTP request to the correct view."""

from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^dragonboatgame/(?P<lessonid>\d+)/$', views.dragonBoatGame, name='dragon boat game'),
    url(r'^fallingtones/(?P<lessonid>\d+)/$', views.fallingTones, name='falling tones'),
]
