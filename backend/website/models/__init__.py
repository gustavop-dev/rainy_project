# This file imports all models from the models directory.
# This allows Django to discover them when placed in separate files.

from .contact_model import Contact
from .specification_type_model import SpecificationType
from .product_model import Product
from .product_specification_model import ProductSpecification
from .product_series_comparison_image_model import ProductSeriesComparisonImage

__all__ = [
    'Contact',
    'SpecificationType',
    'Product',
    'ProductSpecification',
    'ProductSeriesComparisonImage',
] 