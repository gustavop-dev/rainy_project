from django.db import models
from django.utils.text import slugify

class Product(models.Model):
    """
    Represents a product, e.g., a specific model of a rain filter.
    Specifications for each product are handled by the ProductSpecification model.
    """
    title = models.CharField(
        max_length=255,
        verbose_name="Título del Producto",
        help_text="Ej: Rainy FL 80"
    )
    slug = models.SlugField(
        max_length=255,
        unique=True,
        blank=True, # Will be auto-generated if left blank
        verbose_name="Slug (URL amigable)",
        help_text="Versión amigable del título para URLs, se genera automáticamente si se deja vacío."
    )
    initial_text = models.TextField(
        blank=True,
        null=True,
        verbose_name="Texto Inicial",
        help_text="Un texto introductorio o destacado para el producto."
    )
    description = models.TextField(
        verbose_name="Descripción Detallada",
        help_text="Descripción completa del producto."
    )
    price = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        verbose_name="Precio",
        help_text="Precio del producto."
    )
    main_image = models.ImageField(
        upload_to='products/main_images/',
        verbose_name="Imagen Principal del Producto",
        help_text="Imagen que muestra el producto y sus dimensiones."
    )
    dimensions_image = models.ImageField(
        upload_to='products/dimensions_images/',
        blank=True,
        null=True,
        verbose_name="Imagen de Medidas",
        help_text="Imagen que muestra las medidas y dimensiones específicas del producto."
    )
    order = models.PositiveIntegerField(
        default=0,
        verbose_name="Orden de Visualización",
        help_text="Número para ordenar los productos (menor primero)."
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="¿Está Activo?",
        help_text="Desmarcar para ocultar el producto del sitio web."
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de Creación")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Fecha de Actualización")

    class Meta:
        verbose_name = "Producto"
        verbose_name_plural = "Productos"
        ordering = ['order', 'title']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs) 