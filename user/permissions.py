from rest_framework import permissions
from rest_framework.views import Request, View
from user.models import User
from django.shortcuts import get_object_or_404


class IsOwnerPermission(permissions.BasePermission):
    def has_object_permission(self, request: Request, view: View, obj: User) -> bool:
        return obj == request.user or request.user.is_superuser


class IsIdOwnerOrModPermission(permissions.BasePermission):
    def has_permission(self, request: Request, view: View):
        return request.user.id == view.kwargs["user_id"] or request.user.is_superuser


class IsUserOrMod(permissions.BasePermision):
    def has_permission(self, request: Request, view: View):
        if request.method == "GET":
            return True

        if not request.user.is_authenticated:
            return False

        request.user.role == "User" or request.user.is_superuser
