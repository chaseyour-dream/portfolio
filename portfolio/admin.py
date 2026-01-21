from django.contrib import admin
from .models import Profile, Experience, Skill, Project, Achievement, ContactMessage

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'email', 'updated_at']
    search_fields = ['name', 'title', 'email']
    readonly_fields = ['created_at', 'updated_at']
    fieldsets = (
        ('Personal Information', {
            'fields': ('name', 'title', 'bio', 'profile_image')
        }),
        ('Contact Details', {
            'fields': ('email', 'phone', 'location')
        }),
        ('Social Links', {
            'fields': ('linkedin_url', 'github_url')
        }),
        ('Documents', {
            'fields': ('resume',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['title', 'company', 'start_date', 'end_date', 'is_current', 'order']
    list_filter = ['is_current', 'company']
    search_fields = ['title', 'company', 'description']
    ordering = ['-order', '-start_date']
    list_editable = ['order', 'is_current']
    fieldsets = (
        ('Position Details', {
            'fields': ('title', 'company', 'location')
        }),
        ('Duration', {
            'fields': ('start_date', 'end_date', 'is_current')
        }),
        ('Description', {
            'fields': ('description',)
        }),
        ('Certificate', {
            'fields': ('certificate', 'certificate_url'),
            'description': 'Upload a certificate image or provide a URL to an external certificate'
        }),
        ('Display Order', {
            'fields': ('order',)
        }),
    )

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'proficiency', 'icon']
    list_filter = ['category']
    search_fields = ['name']
    list_editable = ['proficiency', 'category']
    fieldsets = (
        ('Skill Information', {
            'fields': ('name', 'category', 'proficiency')
        }),
        ('Display', {
            'fields': ('icon',)
        }),
    )

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'featured', 'order', 'created_at', 'get_technologies']
    list_filter = ['featured', 'created_at']
    search_fields = ['title', 'description', 'technologies']
    ordering = ['-featured', '-order', '-created_at']
    list_editable = ['featured', 'order']
    fieldsets = (
        ('Project Information', {
            'fields': ('title', 'description', 'image')
        }),
        ('Technical Details', {
            'fields': ('technologies',)
        }),
        ('Links', {
            'fields': ('github_url', 'live_url')
        }),
        ('Display Settings', {
            'fields': ('featured', 'order')
        }),
    )
    
    def get_technologies(self, obj):
        return obj.technologies[:50] + "..." if len(obj.technologies) > 50 else obj.technologies
    get_technologies.short_description = 'Technologies'

@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ['title', 'organization', 'date', 'icon']
    search_fields = ['title', 'organization']
    fieldsets = (
        ('Achievement Details', {
            'fields': ('title', 'organization', 'date')
        }),
        ('Description', {
            'fields': ('description',)
        }),
        ('Display', {
            'fields': ('icon',)
        }),
    )

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'created_at', 'is_read']
    list_filter = ['is_read', 'created_at']
    search_fields = ['name', 'email', 'subject']
    readonly_fields = ['created_at']
    ordering = ['-created_at']
    list_editable = ['is_read']
    actions = ['mark_as_read', 'mark_as_unread']
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'subject')
        }),
        ('Message', {
            'fields': ('message',)
        }),
        ('Status', {
            'fields': ('is_read', 'created_at')
        }),
    )
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
        self.message_user(request, f"{queryset.count()} messages marked as read.")
    mark_as_read.short_description = "Mark selected messages as read"
    
    def mark_as_unread(self, request, queryset):
        queryset.update(is_read=False)
        self.message_user(request, f"{queryset.count()} messages marked as unread.")
    mark_as_unread.short_description = "Mark selected messages as unread"