from django.db import models


class Post(models.Model):
    class Meta:
        ordering = ["id"]

    description = models.CharField(max_length=50)
    picture = models.FileField(upload_to="static", null=True, blank=True)
    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="posts"
    )

