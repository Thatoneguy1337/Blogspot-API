from django.urls import path
from . import views

urlpatterns = [
    path("user/", views.UserView.as_view()),
    path("user/all", views.ViewAllUsers.as_view()),
    path("user/<int:user_id>/", views.UserViewDetail.as_view()),
    path("user/login/", views.CustomTokenObtainPairView.as_view()),
]
