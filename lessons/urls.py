from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<lessonid>\d+)/slide/(?P<slideid>\d+)$', views.slide, name='slide')
]