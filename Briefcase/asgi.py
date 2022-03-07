"""
ASGI config for Briefcase project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.2/howto/deployment/asgi/
"""


from django.core.asgi import get_asgi_application
from os import environ
from decouple import config


# Elije la configuración adecuada para desarrollo o para producción,
# utiliza la variable de entorno COMPUTERNAME para decidir si está en el servidor o en 
# local.

if config('DJANGO_AWS_AWAKATE') == 'development':
    environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.deployment')
else:
    environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.production')


application = get_asgi_application()
