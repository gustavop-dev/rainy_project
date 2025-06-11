from django.core.management.base import BaseCommand
from website.models.product_model import Product
from website.models.specification_type_model import SpecificationType
from website.models.product_specification_model import ProductSpecification
from decimal import Decimal

class Command(BaseCommand):
    help = 'Create sample products with specifications based on Rainy FL series'

    def handle(self, *args, **options):
        self.stdout.write('Creating specification types...')
        
        # Create specification types
        spec_types_data = [
            ('Área máxima de la cubierta', 'm²', 'Área máxima que puede cubrir el filtro'),
            ('Máxima Intensidad de la lluvia', 'mm/h', 'Intensidad máxima de lluvia que puede manejar'),
            ('Tipo de filtro', None, 'Tipo y diseño del filtro'),
            ('Principio de trabajo', None, 'Principio de funcionamiento del filtro'),
            ('Presión operacional', 'cm de columna de agua', 'Presión necesaria para el funcionamiento'),
            ('Caudal máximo', 'L/min', 'Caudal máximo que puede procesar'),
            ('Elemento filtrante', None, 'Descripción del elemento filtrante'),
            ('Tamaño de la malla filtrante', 'micras', 'Tamaño de la malla del filtro'),
            ('Tamaño de la entrada', 'mm', 'Diámetro de la entrada de agua'),
            ('Tamaño salida de agua limpia', 'mm', 'Diámetro de la salida de agua filtrada'),
            ('Tamaño salida de desagüe', 'mm', 'Diámetro de la salida de desagüe'),
            ('Material cuerpo del filtro', None, 'Material del cuerpo principal del filtro'),
            ('Eficiencia del filtro', '%', 'Porcentaje de eficiencia del filtro'),
            ('Fuente de poder', None, 'Fuente de energía requerida'),
            ('Limpieza', None, 'Método de limpieza del filtro'),
        ]
        
        spec_types = {}
        for name, unit, description in spec_types_data:
            spec_type, created = SpecificationType.objects.get_or_create(
                name=name,
                defaults={'unit': unit, 'description': description}
            )
            spec_types[name] = spec_type
            if created:
                self.stdout.write(f'Created specification type: {name}')

        self.stdout.write('Creating products...')
        
        # Product data based on the specifications table
        products_data = [
            {
                'title': 'Rainy FL 80',
                'price': Decimal('450000.00'),
                'initial_text': 'Filtro de lluvia ideal para techos de hasta 120 m²',
                'description': 'El Rainy FL 80 es perfecto para casas medianas y pequeñas. Su diseño compacto permite una instalación sencilla mientras mantiene la máxima eficiencia en la filtración de agua de lluvia.',
                'order': 1,
                'specs': {
                    'Área máxima de la cubierta': '120',
                    'Caudal máximo': '120',
                    'Tamaño de la entrada': '90',
                    'Tamaño salida de agua limpia': '63',
                    'Tamaño salida de desagüe': '90',
                }
            },
            {
                'title': 'Rainy FL 150',
                'price': Decimal('550000.00'),
                'initial_text': 'Filtro de lluvia para techos de hasta 180 m²',
                'description': 'El Rainy FL 150 ofrece mayor capacidad de filtración para casas grandes y pequeñas edificaciones comerciales. Equilibrio perfecto entre eficiencia y capacidad.',
                'order': 2,
                'specs': {
                    'Área máxima de la cubierta': '180',
                    'Caudal máximo': '180',
                    'Tamaño de la entrada': '90',
                    'Tamaño salida de agua limpia': '75',
                    'Tamaño salida de desagüe': '90',
                }
            },
            {
                'title': 'Rainy FL 250',
                'price': Decimal('750000.00'),
                'initial_text': 'Filtro de lluvia de alta capacidad para techos de hasta 250 m²',
                'description': 'El Rainy FL 250 está diseñado para edificaciones comerciales y residenciales de gran tamaño. Máxima eficiencia para grandes volúmenes de agua.',
                'order': 3,
                'specs': {
                    'Área máxima de la cubierta': '250',
                    'Caudal máximo': '250',
                    'Tamaño de la entrada': '110',
                    'Tamaño salida de agua limpia': '90',
                    'Tamaño salida de desagüe': '90',
                }
            },
            {
                'title': 'Rainy FL 350',
                'price': Decimal('950000.00'),
                'initial_text': 'Filtro de lluvia industrial para techos de hasta 375 m²',
                'description': 'El Rainy FL 350 es la solución ideal para aplicaciones industriales y comerciales de gran escala. Diseñado para manejar grandes volúmenes con máxima eficiencia.',
                'order': 4,
                'specs': {
                    'Área máxima de la cubierta': '375',
                    'Caudal máximo': '360',
                    'Tamaño de la entrada': '110',
                    'Tamaño salida de agua limpia': '110',
                    'Tamaño salida de desagüe': '90',
                }
            },
            {
                'title': 'Rainy FL 500',
                'price': Decimal('1200000.00'),
                'initial_text': 'Filtro de lluvia de máxima capacidad para techos de hasta 500 m²',
                'description': 'El Rainy FL 500 representa la máxima capacidad de nuestra línea de filtros. Ideal para grandes complejos industriales y comerciales que requieren el más alto rendimiento.',
                'order': 5,
                'specs': {
                    'Área máxima de la cubierta': '500',
                    'Caudal máximo': '480',
                    'Tamaño de la entrada': '110',
                    'Tamaño salida de agua limpia': '110',
                    'Tamaño salida de desagüe': '110',
                }
            }
        ]
        
        # Common specifications for all products
        common_specs = {
            'Máxima Intensidad de la lluvia': '75',
            'Tipo de filtro': 'Abierto por un extremo, con diseño antiobstrucción',
            'Principio de trabajo': 'Fuerza Cohesiva y Centrífuga',
            'Presión operacional': '30,48 cm de columna de agua (0,060 kg/cm2)',
            'Elemento filtrante': 'Malla de superficies múltiples en acero inoxidable SS-304 - grado alimenticio',
            'Tamaño de la malla filtrante': '250 micras (0,25 mm)',
            'Material cuerpo del filtro': 'Polietileno de alta densidad (HDPE), estabilizado contra rayos ultravioleta (UV), resistente a la corrosión y a la intemperie.',
            'Eficiencia del filtro': 'Por encima del 90%',
            'Fuente de poder': 'Gravedad',
            'Limpieza': 'Autolimpieza mediante descarga automática',
        }

        # Create products
        for product_data in products_data:
            product, created = Product.objects.get_or_create(
                title=product_data['title'],
                defaults={
                    'price': product_data['price'],
                    'initial_text': product_data['initial_text'],
                    'description': product_data['description'],
                    'order': product_data['order'],
                    'is_active': True,
                }
            )
            
            if created:
                self.stdout.write(f'Created product: {product.title}')
                
                # Create specifications for this product
                all_specs = {**common_specs, **product_data['specs']}
                
                for spec_name, spec_value in all_specs.items():
                    if spec_name in spec_types:
                        ProductSpecification.objects.get_or_create(
                            product=product,
                            specification_type=spec_types[spec_name],
                            defaults={'value': spec_value}
                        )
                
                self.stdout.write(f'Added {len(all_specs)} specifications for {product.title}')
            else:
                self.stdout.write(f'Product already exists: {product.title}')

        self.stdout.write(self.style.SUCCESS('Successfully created sample products and specifications!')) 