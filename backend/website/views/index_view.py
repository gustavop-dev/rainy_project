from django.shortcuts import render


def index(request):
    """Vista principal que muestra la página de inicio"""
    return render(request, 'website/index.html') 