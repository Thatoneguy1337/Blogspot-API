from django.db import models
from post.models import Post
from datetime import datetime


class Comments(models.Model):
    class Meta:
        ordering = ["id"]

    description = models.CharField(max_length=750)
    posted_at = models.DateTimeField(default=datetime.now, blank=True)
    post = models.ManyToManyField(Post)
    user = models.ForeignKey(
        "user.User", on_delete=models.CASCADE, related_name="user"
    )
