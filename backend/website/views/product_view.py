from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from website.models.product_model import Product
from website.models.product_series_comparison_image_model import ProductSeriesComparisonImage
from website.serializers.product_serializer import ProductSerializer
from website.serializers.product_series_comparison_image_serializer import ProductSeriesComparisonImageSerializer

@api_view(['GET'])
def products_list(request):
    """
    API view to retrieve all products with their specifications and comparison images.
    Returns a complete overview of all available product information.
    """
    # Get all active products ordered by their display order
    products = Product.objects.filter(is_active=True).prefetch_related('specifications__specification_type')
    
    # Get all active comparison images
    comparison_images = ProductSeriesComparisonImage.objects.filter(is_active=True)
    
    # Serialize the data
    products_serializer = ProductSerializer(products, many=True, context={'request': request})
    comparison_images_serializer = ProductSeriesComparisonImageSerializer(comparison_images, many=True, context={'request': request})
    
    # Prepare the response data
    response_data = {
        'products': products_serializer.data,
        'comparison_images': comparison_images_serializer.data,
        'total_products': products.count(),
        'total_comparison_images': comparison_images.count()
    }
    
    return Response(response_data, status=status.HTTP_200_OK) 