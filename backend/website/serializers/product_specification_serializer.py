from rest_framework import serializers
from website.models.product_specification_model import ProductSpecification
# from .specification_type_serializer import SpecificationTypeSerializer # Could be used for nested serialization

class ProductSpecificationSerializer(serializers.ModelSerializer):
    """
    Serializer for the ProductSpecification model.
    Includes the name of the specification type for better readability.
    """
    specification_type_name = serializers.CharField(source='specification_type.name', read_only=True)
    specification_type_unit = serializers.CharField(source='specification_type.unit', read_only=True, allow_null=True)

    class Meta:
        model = ProductSpecification
        fields = [
            'id',
            'product',
            'specification_type',
            'specification_type_name',
            'specification_type_unit',
            'value'
        ]
        # To make specification_type writable by its ID, but show name/unit when reading.
        # For more complex scenarios, you might override create/update or use a different serializer for writing.
        extra_kwargs = {
            'specification_type': {'write_only': True}
        }

class ProductSpecificationNestedSerializer(serializers.ModelSerializer):
    """
    Simplified serializer for nesting within ProductSerializer.
    Shows only type name, unit, and value.
    """
    name = serializers.CharField(source='specification_type.name', read_only=True)
    unit = serializers.CharField(source='specification_type.unit', read_only=True, allow_null=True)
    value = serializers.CharField(read_only=True)

    class Meta:
        model = ProductSpecification
        fields = ['name', 'unit', 'value'] 