from django.db import models

class Contact(models.Model):
    """
    Model to store contact form submissions from the website.
    """
    name = models.CharField(
        max_length=255,
        verbose_name="Nombre"
    )
    phone = models.CharField(
        max_length=20,
        verbose_name="Teléfono",
        blank=True, # Phone can be optional
        null=True
    )
    email = models.EmailField(
        verbose_name="Correo Electrónico"
    )
    message = models.TextField(
        verbose_name="Mensaje"
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Fecha de Creación"
    )

    class Meta:
        verbose_name = "Contacto"
        verbose_name_plural = "Formularios de Contacto"
        ordering = ['created_at']

    def __str__(self):
        return f"Contact submission from {self.name} ({self.email}) on {self.created_at.strftime('%Y-%m-%d %H:%M')}" 