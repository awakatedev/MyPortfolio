from django.urls import path
from .api import ContactView, AnyFileView


urlpatterns = [
    path('contact/', ContactView.as_view()),
    path('upload/file/', AnyFileView.as_view())
]
