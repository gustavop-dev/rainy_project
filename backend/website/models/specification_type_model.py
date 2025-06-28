from django.db import models

class SpecificationType(models.Model):
    """
    Model to define the types of specifications a product can have.
    For example: 'Maximum Coverage Area', 'Max Rain Intensity', 'Filter Type'.
    """
    name = models.CharField(
        max_length=255,
        unique=True,
        verbose_name="Nombre de la Especificación",
        help_text="Ej: Área máxima de la cubierta, Intensidad máxima de lluvia"
    )
    description = models.TextField(
        blank=True,
        null=True,
        verbose_name="Descripción (Opcional)",
        help_text="Descripción adicional para el tipo de especificación (visible en admin)."
    )
    unit = models.CharField(
        max_length=50,
        blank=True,
        null=True,
        verbose_name="Unidad de Medida (Opcional)",
        help_text="Ej: m2, mm/h, L/min. Dejar en blanco si no aplica."
    )

    class Meta:
        verbose_name = "Tipo de Especificación de Producto"
        verbose_name_plural = "Tipos de Especificaciones de Producto"
        ordering = ['id']

    def __str__(self):
        if self.unit:
            return f"{self.name} ({self.unit})"
        return self.name 