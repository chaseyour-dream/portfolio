from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings
from .models import Profile, Experience, Skill, Project, Achievement, ContactMessage
from .serializers import (
    ProfileSerializer, ExperienceSerializer, SkillSerializer, 
    ProjectSerializer, AchievementSerializer, ContactMessageSerializer
)

class ProfileView(generics.RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    
    def get_object(self):
        return Profile.objects.first()

class ExperienceListView(generics.ListAPIView):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class SkillListView(generics.ListAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class AchievementListView(generics.ListAPIView):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer

@api_view(['POST'])
def contact_view(request):
    serializer = ContactMessageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        
        # Send email notification (optional)
        try:
            send_mail(
                subject=f"Portfolio Contact: {serializer.validated_data['subject']}",
                message=f"""
                Name: {serializer.validated_data['name']}
                Email: {serializer.validated_data['email']}
                Subject: {serializer.validated_data['subject']}
                
                Message:
                {serializer.validated_data['message']}
                """,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=['your-email@example.com'],  # Replace with your email
                fail_silently=True,
            )
        except:
            pass
        
        return Response({
            'message': 'Thank you for your message! I will get back to you soon.'
        }, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)