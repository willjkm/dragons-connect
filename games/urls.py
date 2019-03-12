"""URLS route the HTTP request to the correct view."""

from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^(?P<gameid>\d+)/(?P<lessonid>\d+)/$', views.games, name='games')
]
