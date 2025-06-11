from django.contrib import admin
from django.utils.translation import gettext_lazy as _
from .models.contact_model import Contact
from .models.product_model import Product
from .models.product_specification_model import ProductSpecification
from .models.specification_type_model import SpecificationType
from .models.product_series_comparison_image_model import ProductSeriesComparisonImage

class ContactAdmin(admin.ModelAdmin):
    """
    Custom admin configuration for the Contact model.
    Display specific fields of the Contact model.
    """
    list_display = ('name', 'email', 'phone', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('name', 'email', 'message')
    readonly_fields = ('created_at',)
    ordering = ('-created_at',)

class ProductSpecificationInline(admin.TabularInline):
    """
    Inline admin for ProductSpecification to be shown in Product admin.
    """
    model = ProductSpecification
    extra = 1
    autocomplete_fields = ['specification_type']

class ProductAdmin(admin.ModelAdmin):
    """
    Custom admin configuration for the Product model.
    Display specific fields of the Product model.
    """
    list_display = ('title', 'price', 'order', 'is_active', 'created_at')
    list_filter = ('is_active', 'created_at', 'updated_at')
    search_fields = ('title', 'description')
    prepopulated_fields = {'slug': ('title',)}
    readonly_fields = ('created_at', 'updated_at')
    ordering = ('order', 'title')
    inlines = [ProductSpecificationInline]
    
    fieldsets = (
        (_('Información Básica'), {
            'fields': ('title', 'slug', 'initial_text', 'description')
        }),
        (_('Precio y Imágenes'), {
            'fields': ('price', 'main_image', 'dimensions_image')
        }),
        (_('Configuración'), {
            'fields': ('order', 'is_active')
        }),
        (_('Fechas'), {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

class ProductSpecificationAdmin(admin.ModelAdmin):
    """
    Custom admin configuration for the ProductSpecification model.
    Display specific fields of the ProductSpecification model.
    """
    list_display = ('product', 'specification_type', 'value')
    list_filter = ('specification_type', 'product')
    search_fields = ('product__title', 'specification_type__name', 'value')
    autocomplete_fields = ['product', 'specification_type']

class SpecificationTypeAdmin(admin.ModelAdmin):
    """
    Custom admin configuration for the SpecificationType model.
    Display specific fields of the SpecificationType model.
    """
    list_display = ('name', 'unit', 'description')
    search_fields = ('name', 'description')
    ordering = ('name',)

class ProductSeriesComparisonImageAdmin(admin.ModelAdmin):
    """
    Custom admin configuration for the ProductSeriesComparisonImage model.
    Display specific fields of the ProductSeriesComparisonImage model.
    """
    list_display = ('name', 'is_active', 'uploaded_at')
    list_filter = ('is_active', 'uploaded_at')
    search_fields = ('name',)
    readonly_fields = ('uploaded_at',)
    ordering = ('-uploaded_at',)

class RainyProjectAdminSite(admin.AdminSite):
    """
    Custom AdminSite configuration to organize models by sections.
    """
    site_header = 'Rainy Project Administration'
    site_title = 'Rainy Project Admin'
    index_title = 'Welcome to the Rainy Project Control Panel'

    def get_app_list(self, request):
        app_dict = self._build_app_dict(request)
        custom_app_list = [
            {
                'name': _('Contact Management'),
                'app_label': 'contact_management',
                'models': [
                    model for model in app_dict.get('website', {}).get('models', [])
                    if model['object_name'] == 'Contact'
                ]
            },
            {
                'name': _('Product Management'),
                'app_label': 'product_management',
                'models': [
                    model for model in app_dict.get('website', {}).get('models', [])
                    if model['object_name'] in ['Product', 'ProductSpecification', 'SpecificationType']
                ]
            },
            {
                'name': _('Product Images Management'),
                'app_label': 'product_images_management',
                'models': [
                    model for model in app_dict.get('website', {}).get('models', [])
                    if model['object_name'] == 'ProductSeriesComparisonImage'
                ]
            }
        ]
        return custom_app_list

admin_site = RainyProjectAdminSite(name='rainyadmin')

# Register models with custom admin site
admin_site.register(Contact, ContactAdmin)
admin_site.register(Product, ProductAdmin)
admin_site.register(ProductSpecification, ProductSpecificationAdmin)
admin_site.register(SpecificationType, SpecificationTypeAdmin)
admin_site.register(ProductSeriesComparisonImage, ProductSeriesComparisonImageAdmin)

# Also register with default admin site for compatibility
admin.site.register(Contact, ContactAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ProductSpecification, ProductSpecificationAdmin)
admin.site.register(SpecificationType, SpecificationTypeAdmin)
admin.site.register(ProductSeriesComparisonImage, ProductSeriesComparisonImageAdmin)
