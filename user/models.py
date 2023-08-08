from django.db import models
from django.contrib.auth.models import AbstractUser


class Roles(models.TextChoices):
    user = "User"
    moderator = "Moderator"


class User(AbstractUser):
    class Meta:
        ordering = ["id"]

    email = models.CharField(unique=True)
    username = models.CharField(max_length=127, unique=True)
    nickname = models.CharField(max_length=127, nullable=False)
    profile_pic = models.CharField(max_length=1200)
    role = models.CharField(max_length=20, choices=Roles.choices, default=Roles.user)
    background_pic = models.CharField(max_length=1200, nullable=True)
    password = models.CharField(max_length=127, nullable=False)
    cpf = models.CharField(max_length=127, nullable=False)
    country = models.CharField(max_length=50, nullable=False)
