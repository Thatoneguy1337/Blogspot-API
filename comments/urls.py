from django.urls import path
from . import views

urlpatterns = [
    path("comment/<int:post_id>/", views.CreateCommentDetailView.as_view()),
    path("comment/<int:comment_id>/", views.CommentViewDetail.as_view()),
]
