from django.urls import path
from . import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('experience/', views.ExperienceListView.as_view(), name='experience'),
    path('skills/', views.SkillListView.as_view(), name='skills'),
    path('projects/', views.ProjectListView.as_view(), name='projects'),
    path('achievements/', views.AchievementListView.as_view(), name='achievements'),
    path('contact/', views.contact_view, name='contact'),
]