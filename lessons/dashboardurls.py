"""dashboard URLS deals with urls commencing in /dashboard/ """

from django.urls import path
from django.conf.urls import url
from lessons import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    path('updateprofile/', views.updateProfile, name='update profile'),
    path('changeavatar/', views.changeAvatar, name='change avatar'),
    path('analytics/', views.analytics, name='analytics'),
    url(r'^details/(?P<userid>\d+)$', views.details, name='details'),
    url(r'^overview/(?P<classid>\d+)$', views.overview, name='overview'),
    url(r'^overview/(?P<classid>\d+)/unlock$', views.unlock, name='unlock'),
    url(r'^overview/createclass$', views.createclass, name='createclass'),
    url(r'^overview/(?P<classid>\d+)/setauto$', views.setauto, name='setauto'),
    url(r'^schedule/(?P<classid>\d+)$', views.schedule, name='schedule'),
    url(r'^schedule/(?P<classid>\d+)/new$', views.newSchedule, name='newSchedule'),
    url(r'^schedule/(?P<classid>\d+)/update/(?P<keid>\d+)$', views.updateSchedule, name='updateSchedule'),
    url(r'^schedule/(?P<classid>\d+)/custom$', views.createCustomSchedule, name='customSchedule'),
]
