from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModalSerializer):
    class Meta:
        model = Post
        fields = ["id", "description", "picture", "user_id"]

        read_only = ["user_id"]

    def create(self, validated_data):
        return Post.objects.create(**validated_data)

    def update(self, instance: Post, validated_data: dict) -> Post:
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance
