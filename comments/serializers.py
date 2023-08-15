from rest_framework import serializers
from .models import Comments


class CommentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ["id", "description", "post_id", "user_id"]

        read_only = ["id","user_id", "post_id"]

    def create(self, validated_data):
        return Comments.objects.create(**validated_data)

    def update(self, instance: Comments, validated_data: dict) -> Comments:
        for key, value in validated_data.items():
            setattr(instance, key, value)

        instance.save()

        return instance
