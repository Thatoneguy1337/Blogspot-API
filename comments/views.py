from django.shortcuts import render
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics
from user.permissions import IsUserOrMod, IsOwnerPermission
from comments.models import Comments
from comments.serializers import CommentsSerializer
from drf_spectacular.utils import extend_schema


class CreateCommentDetailView(generics.CreateAPIView):
    authentication_classes = [JWTAuthentication]

    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    lookup_url_kwarg = "post_id"

    def perform_create(self, serializer):
        return serializer.save(user_id=self.request.user.id)

    @extend_schema(
        operation_id="Create User Comment",
        responses={200: CommentsSerializer},
        description="Create user comments on Post ",
        summary="Create Comment",
        tags=["Post"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    @extend_schema(
        operation_id="List user",
        responses={200: CommentsSerializer},
        description="List the comments done in a post",
        summary="List by id",
        tags=["User by Id"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class CommentViewDetail(generics.CreateAPIView):
    authentication_classes = [JWTAuthentication]

    queryset = Comments.objects.all()
    serializer_class = CommentsSerializer
    lookup_url_kwarg = "comment_id"

    @extend_schema(
        operation_id="Edit Comment",
        responses={200: CommentsSerializer},
        description="Edit user comments on Post ",
        summary="Edit Comment",
        tags=["Post"],
    )
    def patch(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
