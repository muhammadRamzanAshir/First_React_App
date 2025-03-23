from django.urls import path
from landing import views

urlpatterns = [
    path("api/landing/",views.get_landing_page),
    path("api/hero/",views.get_hero_section),
]