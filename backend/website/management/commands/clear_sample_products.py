from django.core.management.base import BaseCommand
from website.models.product_model import Product
from website.models.product_specification_model import ProductSpecification
from website.models.specification_type_model import SpecificationType

class Command(BaseCommand):
    help = (
        "Elimina los productos 'Rainy FL' y todas sus especificaciones asociadas. "
        "No borra otros productos ni especificaciones que puedan existir."
    )

    def handle(self, *args, **options):
        # Filtrar productos cuyo título comience con "Rainy FL"
        rainy_products = Product.objects.filter(title__startswith="Rainy FL")

        if not rainy_products.exists():
            self.stdout.write(self.style.WARNING("No se encontraron productos 'Rainy FL' para eliminar."))
            return

        # Contar cuántas especificaciones y productos se eliminarán
        spec_count = ProductSpecification.objects.filter(product__in=rainy_products).count()
        prod_count = rainy_products.count()

        # Eliminar especificaciones y luego productos
        ProductSpecification.objects.filter(product__in=rainy_products).delete()
        rainy_products.delete()

        # Opcionalmente, se pueden eliminar tipos de especificación que hayan quedado sin productos asociados
        # (solo los que coinciden con los nombres de la tabla)
        orphan_spec_types = SpecificationType.objects.filter(productspecification__isnull=True)
        removed_spec_types = list(orphan_spec_types.values_list("name", flat=True))
        orphan_spec_types.delete()

        self.stdout.write(self.style.SUCCESS(
            f"Eliminados {spec_count} registros de especificaciones y {prod_count} productos 'Rainy FL'."
        ))
        if removed_spec_types:
            self.stdout.write(
                self.style.SUCCESS(
                    "También se eliminaron los tipos de especificación huérfanos: " + ", ".join(removed_spec_types)
                )
            ) 