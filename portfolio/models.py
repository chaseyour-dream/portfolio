from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    bio = models.TextField()
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    location = models.CharField(max_length=100)
    profile_image = models.ImageField(upload_to='profile/', blank=True, null=True)
    resume = models.FileField(upload_to='documents/', blank=True, null=True)
    linkedin_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    location = models.CharField(max_length=100, blank=True, null=True)
    start_date = models.CharField(max_length=50)
    end_date = models.CharField(max_length=50, blank=True, null=True)
    description = models.TextField()
    is_current = models.BooleanField(default=False)
    certificate = models.ImageField(upload_to='certificates/', blank=True, null=True)
    certificate_url = models.URLField(blank=True, null=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['-order', '-start_date']

    def __str__(self):
        return f"{self.title} at {self.company}"

class Skill(models.Model):
    SKILL_CATEGORIES = [
        ('technical', 'Technical'),
        ('leadership', 'Leadership'),
        ('tools', 'Tools & Technologies'),
        ('soft', 'Soft Skills'),
    ]
    
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=20, choices=SKILL_CATEGORIES)
    proficiency = models.IntegerField(default=80)  # Percentage
    icon = models.CharField(max_length=50, blank=True, null=True)  # For icon class names

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=300)  # Comma-separated
    github_url = models.URLField(blank=True, null=True)
    live_url = models.URLField(blank=True, null=True)
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    featured = models.BooleanField(default=False)
    order = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-featured', '-order', '-created_at']

    def __str__(self):
        return self.title

class Achievement(models.Model):
    title = models.CharField(max_length=200)
    organization = models.CharField(max_length=200)
    date = models.CharField(max_length=50)
    description = models.TextField(blank=True, null=True)
    icon = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"