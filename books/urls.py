from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, CategoryViewSet, OrderViewSet

router = DefaultRouter()
router.register(r'books', BookViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
