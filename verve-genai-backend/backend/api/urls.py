from django.contrib import admin
from django.urls import path, include
from . import views
urlpatterns = [
    path('home/', view=views.Homeview.as_view(), name='home')
]
