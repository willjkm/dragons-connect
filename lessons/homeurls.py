"""Home URLS deals with urls commencing in / """

from django.urls import path
from lessons import views

urlpatterns = [
    path('', views.home, name='home'),
]
