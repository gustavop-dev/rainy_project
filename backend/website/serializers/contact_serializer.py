from rest_framework import serializers
from website.models.contact_model import Contact

class ContactSerializer(serializers.ModelSerializer):
    """
    Serializer for the Contact model.
    """
    class Meta:
        model = Contact
        fields = ['id', 'name', 'phone', 'email', 'message', 'created_at']
        read_only_fields = ['created_at'] 