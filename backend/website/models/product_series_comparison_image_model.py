from django.db import models

class ProductSeriesComparisonImage(models.Model):
    """
    Model to store a general comparison image for a product series.
    For example, an image showing the dimensions of all 'Rainy FL' models side-by-side.
    """
    name = models.CharField(
        max_length=255,
        verbose_name="Nombre de la Imagen Comparativa",
        help_text="Un nombre descriptivo para la imagen, ej: Comparativa Dimensiones Serie Rainy FL"
    )
    image = models.ImageField(
        upload_to='products/comparison_images/',
        verbose_name="Imagen Comparativa",
        help_text="Imagen que muestra la comparativa de varios productos de la serie."
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="¿Está Activa?",
        help_text="Desmarcar para ocultar esta imagen del sitio."
    )
    uploaded_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Subida")

    class Meta:
        verbose_name = "Imagen Comparativa de Serie de Productos"
        verbose_name_plural = "Imágenes Comparativas de Series de Productos"
        ordering = ['name']

    def __str__(self):
        return self.name 