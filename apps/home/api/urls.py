from django.urls import path
from .api import ContactView
urlpatterns = [
    path('contact/', ContactView.as_view()),
]
