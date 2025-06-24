from django.shortcuts import render

# Las vistas de la API están organizadas en módulos dentro de la carpeta views/
# Ejemplo: website/views/contact_view.py para las vistas relacionadas con contacto

def index(request):
    """Vista principal que muestra la página de inicio"""
    return render(request, 'website/index.html')

# Create your views here.
