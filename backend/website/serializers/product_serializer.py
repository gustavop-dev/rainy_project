from rest_framework import serializers
from website.models.product_model import Product
from .product_specification_serializer import ProductSpecificationNestedSerializer

class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer for the Product model with nested specifications.
    """
    specifications = ProductSpecificationNestedSerializer(many=True, read_only=True)
    main_image_url = serializers.SerializerMethodField()
    dimensions_image_url = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = [
            'id',
            'title',
            'slug',
            'initial_text',
            'description',
            'price',
            'main_image',
            'main_image_url',
            'dimensions_image',
            'dimensions_image_url',
            'order',
            'is_active',
            'created_at',
            'updated_at',
            'specifications'
        ]

    def get_main_image_url(self, obj):
        """
        Return the full URL for the main image if it exists.
        """
        if obj.main_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.main_image.url)
            return obj.main_image.url
        return None

    def get_dimensions_image_url(self, obj):
        """
        Return the full URL for the dimensions image if it exists.
        """
        if obj.dimensions_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.dimensions_image.url)
            return obj.dimensions_image.url
        return None 