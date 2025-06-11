from rest_framework import serializers
from website.models.specification_type_model import SpecificationType

class SpecificationTypeSerializer(serializers.ModelSerializer):
    """
    Serializer for the SpecificationType model.
    """
    class Meta:
        model = SpecificationType
        fields = ['id', 'name', 'description', 'unit'] 