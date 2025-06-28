from django.db import models

class ProductSpecification(models.Model):
    """
    Links a Product to a SpecificationType and stores the specific value
    for that product's specification.
    E.g., For Product 'Rainy FL 80' and SpecificationType 'Maximum Coverage Area',
    the value might be '120 m2'.
    """
    product = models.ForeignKey(
        'Product', # Use string to avoid circular import issues if models were in one file
        related_name='specifications',
        on_delete=models.CASCADE,
        verbose_name="Producto"
    )
    specification_type = models.ForeignKey(
        'SpecificationType',
        on_delete=models.CASCADE,
        verbose_name="Tipo de Especificación"
    )
    value = models.CharField(
        max_length=255,
        verbose_name="Valor de la Especificación",
        help_text="Valor específico para el producto y tipo de especificación. Ej: 120 m2, 75 mm/h, Abierto por un extremo..."
    )

    class Meta:
        verbose_name = "Especificación de Producto"
        verbose_name_plural = "Especificaciones de Productos"
        # Ensure a product cannot have the same specification type listed multiple times
        unique_together = ('product', 'specification_type')
        # Ordenar por producto y por el ID del tipo de especificación para mantener
        # el mismo orden en que fueron creadas las especificaciones (que coincide
        # con el orden de la tabla solicitada por el cliente).
        ordering = ['product', 'specification_type__id'] 

    def __str__(self):
        return f"{self.product.title} - {self.specification_type.name}: {self.value}" 