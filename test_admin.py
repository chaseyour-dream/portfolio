#!/usr/bin/env python3
"""
Test Django admin functionality
"""

import os
import django
from django.conf import settings

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_backend.settings')
django.setup()

from django.contrib.auth.models import User
from portfolio.models import Profile, Project

def test_admin():
    print("🧪 Testing Django Admin Setup")
    print("=" * 40)
    
    # Check if superuser exists
    superusers = User.objects.filter(is_superuser=True)
    print(f"✅ Superusers found: {superusers.count()}")
    
    # Check models
    profiles = Profile.objects.all()
    projects = Project.objects.all()
    
    print(f"✅ Profiles in database: {profiles.count()}")
    print(f"✅ Projects in database: {projects.count()}")
    
    if projects.exists():
        print("\n📋 Projects:")
        for project in projects:
            print(f"  - {project.title}: {project.live_url}")
    
    print(f"\n🌐 Admin URL: http://localhost:8000/admin/")
    print("🔑 Login with your superuser credentials")

if __name__ == "__main__":
    test_admin()