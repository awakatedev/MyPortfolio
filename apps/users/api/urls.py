from django.urls import path
from .api import UserAPIView, UserDetail

urlpatterns = [
    path('user/', UserAPIView.as_view()),
    path('user/<int:pk>/', UserDetail.as_view())
]
