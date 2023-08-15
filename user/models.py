from django.db import models
from django.contrib.auth.models import AbstractUser


class Roles(models.TextChoices):
    user = "User"
    moderator = "Moderator"


class User(AbstractUser):
    class Meta:
        ordering = ["id"]

    email = models.EmailField(unique=True)
    username = models.CharField(max_length=127, unique=True)
    nickname = models.CharField(max_length=127, blank=True)
    telephone = models.CharField(max_length=127, blank=True)
    profile_pic = models.FileField(upload_to='uploads/% Y/% m/% d/', max_length=254)
    role = models.CharField(max_length=20, choices=Roles.choices, default=Roles.user)
    background_pic = models.FileField(upload_to='uploads/% Y/% m/% d/', max_length=254)
    password = models.CharField(max_length=127, blank=False)
    cpf = models.CharField(max_length=127, blank=False)
    country = models.CharField(max_length=50, blank=False)
    state = models.CharField(max_length=50, blank=True)
    # comments = models.ForeignKey(
    #     "comments.Comments", on_delete=models.CASCADE, related_name="comments"
    # )
    # post = models.ForeignKey("post.Post", on_delete=models.CASCADE, related_name="post")
