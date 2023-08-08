from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import User
from rest_framework.exceptions import PermissionDenied


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        validators=[
            UniqueValidator(
                queryset=User.objects.all(),
                message="A user with that username already exists.",
            )
        ]
    )

    email = serializers.EmailField(
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    def create(self, validated_data: dict) -> User:
        if validated_data.get("role") == "Moderator":
            return User.objects.create_superuser(**validated_data)

        else:
            return User.objects.create_user(**validated_data)

    def update(self, instance: User, validated_data: dict) -> User:
        for key, value in validated_data.items():
            if key == "password":
                instance.set_password(value)

                continue

            if (
                instance.role in ["User"]
                and validated_data.get("role", instance.role) == "Moderator"
            ):
                raise PermissionDenied(
                    {
                        "detail": "You do not have permission to perform the change to 'Moderator'"
                    }
                )

            setattr(instance, key, value)

            instance.save()

            return instance

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "username",
            "nickname",
            "profile_pic",
            "background_pic",
            "password",
            "cpf",
            "country",
        ]

        read_only_fields = ["id", "is_superuser"]

        extra_kwargs = {"password": {"write_only": "True"}}
