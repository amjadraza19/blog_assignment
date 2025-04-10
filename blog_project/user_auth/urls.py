from django.urls import path
from .views import *

urlpatterns = [
  path('register/', RegisterView.as_view()),
  path('login/',    LoginView.as_view()),
  path('dashboard/',DashboardView.as_view()),
  path('blogs/',    BlogListCreate.as_view()),
  path('blogs/<int:pk>/', BlogDetail.as_view()),
  path('comment/',  CommentCreate.as_view()),
]
