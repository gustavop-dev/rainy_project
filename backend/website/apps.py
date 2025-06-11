from django.apps import AppConfig


class WebsiteConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'website'
    verbose_name = 'Gestión del Sitio Web'  # Spanish name for the admin
