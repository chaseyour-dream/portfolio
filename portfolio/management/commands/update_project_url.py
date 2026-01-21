from django.core.management.base import BaseCommand
from portfolio.models import Project

class Command(BaseCommand):
    help = 'Update DEAN project URL'

    def handle(self, *args, **options):
        try:
            # Find the DEAN project
            dean_project = Project.objects.get(title='DEAN Organization Website')
            
            # Update the live_url
            dean_project.live_url = 'https://deannepalregistration.com'
            dean_project.save()
            
            self.stdout.write(
                self.style.SUCCESS(f'Successfully updated DEAN project URL to: {dean_project.live_url}')
            )
            
        except Project.DoesNotExist:
            self.stdout.write(
                self.style.ERROR('DEAN Organization Website project not found')
            )
        except Exception as e:
            self.stdout.write(
                self.style.ERROR(f'Error updating project: {e}')
            )