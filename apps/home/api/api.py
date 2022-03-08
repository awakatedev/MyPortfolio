from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from django.template.loader import get_template
from django.core.mail import EmailMultiAlternatives
from django.conf import settings

from apps.home.models import AnyFile, ContactMessage
from .serializers import ContactMessageSerializer, AnyFileSerializer


def send_email(data):
    context = {"mail": data['email']}
    template = get_template('email.html')
    content = template.render(context)
    email = EmailMultiAlternatives(
        # Title message
        f'El cliente potencial, {data["name"]} contactando desde la plataforma',
        # Description message
        data['message'],
        # sender
        context['mail'],
        # recipient
        [
            settings.EMAIL_HOST_USER
        ])
    email.attach_alternative(content, 'text/html')
    email.send()


class ContactView(APIView):
    """
    Create a new message contact
    """

    def get(self, request):
        contact_message = ContactMessage.objects.all()
        serializer = ContactMessageSerializer(contact_message, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ContactMessageSerializer(data=request.data)
        if serializer.is_valid():
            # send_email(data=request.data)
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AnyFileView(APIView):
    """
    Manager files
    """

    def get(self, request):
        anyfile = AnyFile.objects.all()
        serializer = AnyFileSerializer(anyfile, many=True)
        return Response(serializer.data)

    # def post(self, request):
    #     serializer = AnyFileSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

