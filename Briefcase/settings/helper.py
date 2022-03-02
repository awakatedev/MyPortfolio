from os import environ

def setup_config():
    """Elije la configuración adecuada para desarrollo o para producción,
    utiliza la variable de entorno COMPUTERNAME para decidir si está en el servidor o en 
    local.
    """

    if environ['COMPUTERNAME'] in ['DESKTOP-4F07LQG']:
        environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.deployment')
    else:
        environ.setdefault('DJANGO_SETTINGS_MODULE', 'Briefcase.settings.production')
