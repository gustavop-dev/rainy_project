from rest_framework import serializers
from website.models.product_series_comparison_image_model import ProductSeriesComparisonImage

class ProductSeriesComparisonImageSerializer(serializers.ModelSerializer):
    """
    Serializer for the ProductSeriesComparisonImage model.
    """
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = ProductSeriesComparisonImage
        fields = [
            'id',
            'name',
            'image',
            'image_url',
            'is_active',
            'uploaded_at'
        ]

    def get_image_url(self, obj):
        """
        Return the full URL for the image if it exists.
        """
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return obj.image.url
        return None 