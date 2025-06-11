from django.urls import path
from website.views.contact_view import new_contact
from website.views.product_view import products_list

urlpatterns = [
    path('contact/', new_contact, name='new_contact'),
    path('products/', products_list, name='products_list'),
] 