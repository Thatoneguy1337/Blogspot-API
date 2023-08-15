from user.models import User
from user.serializers import UserSerializer
from user.permissions import IsIdOwnerOrModPermission
from rest_framework import generics
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAdminUser
from drf_spectacular.utils import extend_schema
from rest_framework_simplejwt.views import TokenObtainPairView


class UserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    # @extend_schema(
    #     operation_id="Create User",
    #     response={200: UserSerializer},
    #     description="Create User",
    #     summary="Create User",
    #     tags=["User"],
    # )

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class ViewAllUsers(generics.ListAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAdminUser]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    @extend_schema(
        operation_id="List All User",
        responses={200: UserSerializer},
        description="List all user",
        summary="List user",
        tags=["User"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)


class UserViewDetail(generics.RetrieveUpdateDestroyAPIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsIdOwnerOrModPermission]
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = "user_id"

    @extend_schema(
        operation_id="List user",
        responses={200: UserSerializer},
        description="List user users by id",
        summary="List by id",
        tags=["User by Id"],
    )
    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    @extend_schema(
        operation_id="Updated user",
        responses={200: UserSerializer},
        description="Updated user",
        summary="Updated by id",
        tags=["User by Id"],
    )
    def patch(self, request, *args, **kwargs):
        return super().patch(request, *args, **kwargs)

    @extend_schema(
        operation_id="Updated all user",
        responses={200: UserSerializer},
        description="Updated user",
        summary="Updated by id",
        tags=["User by Id"],
    )
    def put(self, request, *args, **kwargs):
        return super().put(request, *args, **kwargs)

    @extend_schema(
        operation_id="Deleta user",
        responses={204: UserSerializer},
        description="Deleta user",
        summary="Deleta by id",
        tags=["User by Id"],
    )
    def delete(self, request, *args, **kwargs):
        return super().delete(request, *args, **kwargs)


class CustomTokenObtainPairView(TokenObtainPairView):
    @extend_schema(
        operation_id="Login",
        responses={200: UserSerializer},
        description="Login User",
        summary="Login User",
        tags=["Login"],
    )
    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)
