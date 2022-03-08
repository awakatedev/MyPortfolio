from rest_framework import serializers
from apps.home.models import ContactMessage, AnyFile

class ContactMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = ContactMessage
        fields = '__all__'

class AnyFileSerializer(serializers.ModelSerializer):

    class Meta:

        model = AnyFile
        fields = '__all__'
