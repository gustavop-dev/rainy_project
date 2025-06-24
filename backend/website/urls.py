from django.urls import path
from website.views.contact_view import new_contact
from website.views.product_view import products_list
from website.views.index_view import index

urlpatterns = [
    path('', index, name='index'),  # Página principal
    path('contact/', new_contact, name='new_contact'),
    path('products/', products_list, name='products_list'),
] 