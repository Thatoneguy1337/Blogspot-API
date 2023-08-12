from django.db import models
from post.models import Post 


class Comments(models.Models):

    class Meta:
        ordering = ["id"]

    description = models.CharField(max_length=750)
    post = models.ManyToManyField(Post)
    user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, related_name="comments"
    )