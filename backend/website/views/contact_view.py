from rest_framework.response import Response
from rest_framework import status
from website.models.contact_model import Contact
from website.serializers.contact_serializer import ContactSerializer
from rest_framework.decorators import api_view
from django.core.mail import send_mail
from django.conf import settings

@api_view(['POST'])
def new_contact(request):
    """
    API view to create a new Contact message.
    """
    serializer = ContactSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        contact = serializer.save()
        
        # Enviar correo electrónico de notificación
        subject = 'Nuevo Contacto de Rainy.com.co'
        
        # Crear el mensaje del correo
        message = f"""
        Se ha recibido un nuevo mensaje de contacto desde rainy.com.co:

        Nombre: {contact.name}
        Teléfono: {contact.phone or 'No proporcionado'}
        Email: {contact.email}
        Mensaje: {contact.message}
        
        Fecha de recepción: {contact.created_at.strftime('%Y-%m-%d %H:%M:%S')}
        """
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL_RECIPIENT],
                fail_silently=False,
            )
        except Exception as e:
            # Si hay error en el envío del correo, log del error pero no falla la creación del contacto
            print(f"Error enviando correo: {e}")
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 