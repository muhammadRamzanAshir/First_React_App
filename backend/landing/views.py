from django.shortcuts import render
from django.http import JsonResponse
from .models import *

# Create your views here.

def get_landing_page(request):
    page = Landing_Page.objects.first()
    
    if page:
        data = {
            "logo": request.build_absolute_uri(page.logo.url) if page.logo else "",
            "nav_items": page.nav_items,
            "login_button_text": page.login_btn_text,
            "login_button_color": page.login_btn_color,
        }
        return JsonResponse(data)

    return JsonResponse({"error": "No settings found"}, status=404)


def get_hero_section(request):
    page = Hero_Section.objects.first()  # Assuming you only have one Hero section

    data = {
        "h1_text": page.h1_text if page else "Default H1",
        "subtitle_text": page.subtitle_text if page else "Default Subtitle",
        "button_colors": page.button_colors if page else ["#FF0000", "#0000FF"],
        "available_icons": [icon.image.url for icon in page.available_icons.all()] if page else []
    }

    return JsonResponse(data)