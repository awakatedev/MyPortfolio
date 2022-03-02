"""
WSGI config for Briefcase project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/wsgi/
"""


from Briefcase.settings.helper import setup_config
from django.core.wsgi import get_wsgi_application

# os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings')
setup_config()

application = get_wsgi_application()
