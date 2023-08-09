from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import generics
from user.permissions import IsUserOrMod, IsIdOwnerOrModPermission
from post.models import Post
from post.serializers import PostSerializer
from drf_spectacular.utils import extend_schema


class CreatePostView(generics.CreateAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsUserOrMod]

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def perform_create(self, serializer):
        return serializer.save(user_id=self.request.user.id)

    @extend_schema(
        operation_id="Create User post",
        responses={200: PostSerializer},
        description="Create User post",
        summary="Create post",
        tags=["Post"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class PostView(generics.ListAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        id_filter = self.request.query_params.get("id")

        if id_filter:
            return Post.objects.filter(id=id_filter)

        return Post.objects.all()

    @extend_schema(
        operation_id="List Post All | id | description | picture",
        responses={200: PostSerializer},
        description="List Post All | id | description | picture",
        summary="List Post",
        tags=["Post"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class PostDetailView(generics.UpdateAPIView, generics.DestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsUserOrMod]

    queryset = Post.objects.all()
    serializer_class = PostSerializer

    lookup_url_kwarg = "post_id"

    @extend_schema(
        operation_id="Updated Post",
        responses={200: PostSerializer},
        description="Updated post by id",
        summary="Updated by id",
        tags=["Post"],
    )
    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    @extend_schema(
        operation_id="Updated Post",
        responses={200: PostSerializer},
        description="Updated Post by id",
        summary="Updated by id",
        tags=["Post"],
    )
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    @extend_schema(
        operation_id="Deleta Post",
        responses={204: PostSerializer},
        description="Deleta post by id",
        summary="Deleta by id",
        tags=["Product"],
    )
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)
