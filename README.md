# Rainy Project

A comprehensive web application for managing and showcasing rain filter products. This project consists of a Django REST API backend and a separate frontend application.

## 🏗️ Project Structure

```
rainy_project/
├── backend/                 # Django REST API
│   ├── config/             # Django settings and configuration
│   ├── website/            # Main Django app
│   │   ├── models/         # Database models
│   │   ├── serializers/    # DRF serializers
│   │   ├── views/          # API views
│   │   ├── management/     # Django management commands
│   │   └── admin.py        # Django admin configuration
│   ├── venv/               # Virtual environment (not in git)
│   ├── manage.py           # Django management script
│   └── requirements.txt    # Python dependencies
├── frontend/               # Frontend application
└── README.md              # This file
```

## 🚀 Features

- **Product Management**: Full CRUD operations for rain filter products
- **Specifications System**: Dynamic product specifications with types and units
- **Image Management**: Multiple images per product (main image + dimensions image)
- **Comparison Images**: Series comparison images for product visualization
- **Contact System**: Contact form management
- **REST API**: Complete API for frontend integration
- **Admin Interface**: Django admin panel with custom configuration

## 📋 Requirements

- Python 3.12+
- Django 4.x
- Django REST Framework
- SQLite (default, configurable)

## 🛠️ Installation & Setup

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rainy_project
   ```

2. **Navigate to backend directory**
   ```bash
   cd backend
   ```

3. **Create and activate virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

4. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run migrations**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Create superuser (optional)**
   ```bash
   python manage.py createsuperuser
   ```

7. **Generate sample data (optional)**
   ```bash
   python manage.py create_sample_products
   ```

8. **Run development server**
   ```bash
   python manage.py runserver
   ```

The API will be available at `http://localhost:8000/`

## 📊 Database Models

### Product
- **title**: Product name (e.g., "Rainy FL 80")
- **slug**: URL-friendly version of title
- **initial_text**: Introductory text
- **description**: Detailed product description
- **price**: Product price
- **main_image**: Main product image
- **dimensions_image**: Product dimensions/measurements image
- **order**: Display order
- **is_active**: Visibility status

### ProductSpecification
- **product**: Related product
- **specification_type**: Type of specification
- **value**: Specification value

### SpecificationType
- **name**: Specification name (e.g., "Capacity", "Dimensions")
- **unit**: Unit of measurement (e.g., "Liters", "cm")
- **description**: Specification description

### ProductSeriesComparisonImage
- **name**: Comparison image name
- **image**: Comparison image file
- **is_active**: Visibility status

### Contact
- **name**: Contact name
- **email**: Contact email
- **phone**: Contact phone
- **message**: Contact message

## 🔌 API Endpoints

### Products
- **GET** `/products/` - Get all active products with specifications and comparison images

### Contact
- **POST** `/contact/` - Submit contact form

### Response Example

```json
{
  "products": [
    {
      "id": 1,
      "title": "Rainy FL 80",
      "slug": "rainy-fl-80",
      "initial_text": "Compact and efficient rain filter",
      "description": "Detailed product description...",
      "price": "299.99",
      "main_image": "products/main_images/rainy_fl_80.jpg",
      "main_image_url": "http://localhost:8000/media/products/main_images/rainy_fl_80.jpg",
      "dimensions_image": "products/dimensions_images/rainy_fl_80_dimensions.jpg",
      "dimensions_image_url": "http://localhost:8000/media/products/dimensions_images/rainy_fl_80_dimensions.jpg",
      "order": 1,
      "is_active": true,
      "created_at": "2024-01-15T10:30:00Z",
      "updated_at": "2024-01-15T10:30:00Z",
      "specifications": [
        {
          "name": "Capacity",
          "unit": "Liters",
          "value": "80"
        },
        {
          "name": "Dimensions",
          "unit": "cm",
          "value": "60x40x30"
        }
      ]
    }
  ],
  "comparison_images": [
    {
      "id": 1,
      "name": "Rainy FL Series Comparison",
      "image": "products/comparison_images/rainy_fl_comparison.jpg",
      "image_url": "http://localhost:8000/media/products/comparison_images/rainy_fl_comparison.jpg",
      "is_active": true,
      "uploaded_at": "2024-01-15T09:00:00Z"
    }
  ],
  "total_products": 1,
  "total_comparison_images": 1
}
```

## 🎨 Admin Interface

Access the Django admin panel at `http://localhost:8000/admin/` with your superuser credentials.

The admin interface is organized into sections:
- **Contact Management**: Manage contact form submissions
- **Product Management**: Manage products, specifications, and specification types
- **Product Images Management**: Manage comparison images

## 🗂️ Media Files

Product images are stored in:
- **Main images**: `media/products/main_images/`
- **Dimensions images**: `media/products/dimensions_images/`
- **Comparison images**: `media/products/comparison_images/`

## 🧪 Development

### Running Tests
```bash
python manage.py test
```

### Creating Sample Data
```bash
python manage.py create_sample_products
```

### Django Shell
```bash
python manage.py shell
```

## 🚀 Deployment

1. Set `DEBUG = False` in settings
2. Configure `ALLOWED_HOSTS`
3. Set up proper database (PostgreSQL recommended)
4. Configure static files serving
5. Set up media files serving
6. Configure environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email [your-email@example.com] or create an issue in the repository.

---

**Made with ❤️ for managing rain filter products efficiently** 