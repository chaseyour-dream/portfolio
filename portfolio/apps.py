from django.apps import AppConfig


class PortfolioConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'portfolio'
    verbose_name = 'Portfolio Management'
    
    def ready(self):
        # Custom admin site configuration
        from django.contrib import admin
        admin.site.site_header = "Pariwartan Portfolio Admin"
        admin.site.site_title = "Portfolio Admin"
        admin.site.index_title = "Welcome to Portfolio Administration"