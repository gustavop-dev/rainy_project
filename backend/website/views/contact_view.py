from rest_framework.response import Response
from rest_framework import status
from website.models.contact_model import Contact
from website.serializers.contact_serializer import ContactSerializer
from rest_framework.decorators import api_view

@api_view(['POST'])
def new_contact(request):
    """
    API view to create a new Contact message.
    """
    serializer = ContactSerializer(data=request.data, context={'request': request})
    if serializer.is_valid():
        contact = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 