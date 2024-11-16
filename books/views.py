from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .models import Book, Category, Order, OrderItem
from .serializers import BookSerializer, CategorySerializer, OrderSerializer, OrderItemSerializer

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    @action(detail=False, methods=['GET'])
    def search(self, request):
        query = request.query_params.get('q', '')
        books = Book.objects.filter(title__icontains=query) | Book.objects.filter(author__icontains=query)
        serializer = self.get_serializer(books, many=True)
        return Response(serializer.data)

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=['GET'])
    def books(self, request, pk=None):
        category = self.get_object()
        books = category.books.all()
        serializer = BookSerializer(books, many=True)
        return Response(serializer.data)

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        order_data = request.data
        items_data = order_data.pop('items', [])
        
        # Create order
        serializer = self.get_serializer(data=order_data)
        serializer.is_valid(raise_exception=True)
        order = serializer.save()
        
        # Create order items
        for item_data in items_data:
            item_data['order'] = order.id
            book = get_object_or_404(Book, id=item_data['book'])
            
            # Update book stock
            if book.stock < item_data['quantity']:
                order.delete()
                return Response(
                    {'error': f'Insufficient stock for book: {book.title}'},
                    status=status.HTTP_400_BAD_REQUEST
                )
            
            book.stock -= item_data['quantity']
            book.save()
            
            item_serializer = OrderItemSerializer(data=item_data)
            item_serializer.is_valid(raise_exception=True)
            item_serializer.save()
        
        return Response(serializer.data, status=status.HTTP_201_CREATED)
