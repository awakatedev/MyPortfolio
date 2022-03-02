"""
ASGI config for Briefcase project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""


from django.core.asgi import get_asgi_application
from settings.helper import setup_config

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings')
setup_config()

application = get_asgi_application()
