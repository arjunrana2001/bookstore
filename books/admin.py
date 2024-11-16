from django.contrib import admin
from .models import Book, Category, Order, OrderItem

# Register your models here.

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'price', 'stock', 'isbn')
    search_fields = ('title', 'author', 'isbn')
    list_filter = ('categories', 'publication_date')

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class OrderItemInline(admin.TabularInline):
    model = OrderItem
    extra = 1

@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ('id', 'customer_name', 'customer_email', 'status', 'total_amount', 'order_date')
    list_filter = ('status', 'order_date')
    search_fields = ('customer_name', 'customer_email')
    inlines = [OrderItemInline]
