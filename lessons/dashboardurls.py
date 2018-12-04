"""dashboard URLS deals with urls commencing in /dashboard/"""

from django.urls import path
from django.conf.urls import url
from lessons import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    url(r'^overview/(?P<classid>\d+)$', views.overview, name='overview'),
    url(r'^schedule/(?P<classid>\d+)$', views.schedule, name='schedule'),
    url(r'^schedule/(?P<classid>\d+)/new$', views.newSchedule, name='newSchedule'),
    url(r'^schedule/(?P<classid>\d+)/update/(?P<keid>\d+)$', views.updateSchedule, name='updateSchedule'),
    url(r'^schedule/(?P<classid>\d+)/custom$', views.createCustomSchedule, name='customSchedule'),
]
