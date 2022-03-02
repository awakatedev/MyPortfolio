from Briefcase.urls import urlpatterns
from django.urls import get_resolver


class HandlerReactRouterMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    