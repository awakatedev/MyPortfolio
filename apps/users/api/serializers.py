from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from apps.users.models import User


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        updated_user = super().update(instance, validated_data)
        updated_user.set_password(validated_data['password'])
        updated_user.save()
        return updated_user

    class Meta:
        model = User
        fields = '__all__'

