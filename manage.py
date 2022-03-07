#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
 
import sys
from os import environ
from decouple import config


def main():
    """Run administrative tasks."""
    # os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings')
    # Elije la configuración adecuada para desarrollo o para producción,
    # utiliza la variable de entorno COMPUTERNAME para decidir si está en el servidor o en 
    # local.

    if config('DJANGO_AWS_AWAKATE') == 'development':
        environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.deployment')
    else:
        environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.production')


    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
