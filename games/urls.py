from django.urls import path
from . import views


urlpatterns = [
    path('demogame/', views.demoGame, name='demo game'),
]
