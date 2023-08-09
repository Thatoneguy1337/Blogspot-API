from django.urls import path
from . import views

urlpatterns = [
    path("post/", views.PostView.as_view()),
    path("post/add/", views.CreatePostView.as_view()),
    path("post/<int:product_id>/", views.PostDetailView.as_view()),
]
