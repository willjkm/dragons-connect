"""dashboard URLS deals with urls commencing in /dashboard/"""

from django.urls import path
from django.conf.urls import url
from . import views

urlpatterns = [
    path('', views.dashboard, name='dashboard'),
    url(r'^schedule/(?P<classid>\d+)$', views.schedule, name='schedule'),
]
