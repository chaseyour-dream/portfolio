from django.core.management.base import BaseCommand
from portfolio.models import Profile, Experience, Skill, Project, Achievement

class Command(BaseCommand):
    help = 'Populate database with sample data'

    def handle(self, *args, **options):
        # Create Profile
        profile, created = Profile.objects.get_or_create(
            name='Pariwartan Poudel',
            defaults={
                'title': 'Python Django Developer | Laravel Developer | Leo Club President',
                'bio': 'Passionate developer and leader with expertise in Python Django, Laravel, and full-stack development. Currently serving as Leo Club President and Campus Director, fostering innovation and community engagement.',
                'email': 'pariwartanpaudel@gmail.com',
                'phone': '+977 98XXXXXXXX',
                'location': 'Pokhara, Nepal',
                'linkedin_url': 'https://linkedin.com/in/pariwartan-poudel',
                'github_url': 'https://github.com/pariwartan-poudel',
            }
        )
        
        # Create Experiences
        experiences = [
            {
                'title': 'Leo Club President',
                'company': 'Leo Club of Pokhara Silver Mountains',
                'location': 'Pokhara, Nepal',
                'start_date': '2025',
                'end_date': '2026',
                'is_current': True,
                'description': 'Currently serving as President with strong background in leadership, strategic planning, event coordination, and team leadership. Fostering student engagement and promoting a positive collaborative environment.',
                'order': 1
            },
            {
                'title': 'Python Django Developer',
                'company': 'KK Engineering Pvt. Ltd.',
                'location': 'Freelance',
                'start_date': '2025',
                'end_date': 'Present',
                'is_current': True,
                'description': 'Developed and deployed the official company website kk-engineering.org using Django. Built backend features, admin panel structures, and dynamic service pages. Integrated SEO-friendly structure and performed server deployment & maintenance.',
                'order': 2
            },
            {
                'title': 'Laravel Developer',
                'company': 'DEAN (Diploma Engineering Association of Nepal)',
                'location': 'Freelance',
                'start_date': '2025',
                'end_date': 'Present',
                'is_current': True,
                'description': 'Developing a dynamic organizational website using Laravel. Building backend modules, content management features, and database structures. Improving UI/UX and ensuring responsive design across all devices.',
                'order': 3
            },
            {
                'title': 'Python Django Developer',
                'company': 'Spiral Engineering Consultancy',
                'location': 'Freelance',
                'start_date': '2025',
                'end_date': 'Present',
                'is_current': True,
                'description': 'Creating a multi-page consultancy website with Django backend functionality. Implementing custom models, service modules, and admin-side management tools. Designing responsive layout and optimizing website performance.',
                'order': 4
            },
            {
                'title': 'Campus Director',
                'company': 'Hult Prize Janapriya Multiple Campus',
                'location': 'Pokhara, Nepal',
                'start_date': '2024',
                'end_date': '2025',
                'is_current': False,
                'description': 'Served as Campus Director with strong background in Information Management and leadership. Experienced in strategic planning, event coordination, and team leadership. Fostered student engagement and promoted positive collaborative environment.',
                'order': 5
            },
            {
                'title': 'College Representative',
                'company': 'Code For Change',
                'location': 'Janapriya Multiple Campus',
                'start_date': '2024',
                'end_date': '2025',
                'is_current': False,
                'description': 'Coordinated with faculty and Code for Change organizers to successfully host workshops, orientation sessions, and recruitment drives on campus. Represented Janapriya Multiple Campus in inter-campus meetings.',
                'order': 6
            }
        ]
        
        for exp_data in experiences:
            Experience.objects.get_or_create(
                title=exp_data['title'],
                company=exp_data['company'],
                defaults=exp_data
            )
        
        # Create Skills
        skills = [
            {'name': 'Python', 'category': 'technical', 'proficiency': 90},
            {'name': 'Django', 'category': 'technical', 'proficiency': 85},
            {'name': 'Laravel', 'category': 'technical', 'proficiency': 80},
            {'name': 'React', 'category': 'technical', 'proficiency': 75},
            {'name': 'JavaScript', 'category': 'technical', 'proficiency': 80},
            {'name': 'HTML5', 'category': 'technical', 'proficiency': 95},
            {'name': 'CSS3', 'category': 'technical', 'proficiency': 90},
            {'name': 'MySQL', 'category': 'technical', 'proficiency': 85},
            {'name': 'PostgreSQL', 'category': 'technical', 'proficiency': 75},
            {'name': 'Git', 'category': 'tools', 'proficiency': 85},
            {'name': 'Bootstrap', 'category': 'tools', 'proficiency': 90},
            {'name': 'Team Leadership', 'category': 'leadership', 'proficiency': 90},
            {'name': 'Strategic Planning', 'category': 'leadership', 'proficiency': 85},
            {'name': 'Event Coordination', 'category': 'leadership', 'proficiency': 88},
            {'name': 'Project Management', 'category': 'leadership', 'proficiency': 82},
            {'name': 'Communication', 'category': 'soft', 'proficiency': 90},
            {'name': 'Problem Solving', 'category': 'soft', 'proficiency': 88},
        ]
        
        for skill_data in skills:
            Skill.objects.get_or_create(
                name=skill_data['name'],
                defaults=skill_data
            )
        
        # Create Projects
        projects = [
            {
                'title': 'KK Engineering Website',
                'description': 'Official company website for KK Engineering Pvt. Ltd. Built with Django backend featuring dynamic service pages, admin panel, and SEO-friendly structure.',
                'technologies': 'Python, Django, HTML5, CSS3, JavaScript, PostgreSQL',
                'github_url': 'https://github.com/username/kk-engineering',
                'live_url': 'https://kk-engineering.org',
                'featured': True,
                'order': 1
            },
            {
                'title': 'DEAN Organization Website',
                'description': 'Dynamic organizational website for Diploma Engineering Association of Nepal using Laravel with content management system.',
                'technologies': 'PHP, Laravel, MySQL, Bootstrap, JavaScript',
                'github_url': 'https://github.com/username/dean-website',
                'live_url': 'https://dean-nepal.org',
                'featured': True,
                'order': 2
            },
            {
                'title': 'Spiral Engineering Consultancy',
                'description': 'Multi-page consultancy website with Django backend functionality and optimized performance.',
                'technologies': 'Python, Django, React, PostgreSQL, CSS3',
                'github_url': 'https://github.com/username/spiral-engineering',
                'live_url': 'https://spiral-engineering.com',
                'featured': True,
                'order': 3
            }
        ]
        
        for project_data in projects:
            Project.objects.get_or_create(
                title=project_data['title'],
                defaults=project_data
            )
        
        # Create Achievements
        achievements = [
            {
                'title': 'Leo Club President',
                'organization': 'Leo Club of Pokhara Silver Mountains',
                'date': '2025-2026',
                'description': 'Elected as President for the term 2025/2026, leading community service initiatives and youth development programs.'
            },
            {
                'title': 'Campus Director',
                'organization': 'Hult Prize Janapriya Multiple Campus',
                'date': '2024-2025',
                'description': 'Successfully managed campus-wide entrepreneurship programs and student engagement activities.'
            },
            {
                'title': 'College Representative',
                'organization': 'Code For Change',
                'date': '2024-2025',
                'description': 'Represented college in inter-campus meetings and coordinated technical workshops and events.'
            }
        ]
        
        for achievement_data in achievements:
            Achievement.objects.get_or_create(
                title=achievement_data['title'],
                organization=achievement_data['organization'],
                defaults=achievement_data
            )
        
        self.stdout.write(
            self.style.SUCCESS('Successfully populated database with sample data!')
        )