import os
import django
import datetime

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookstore_project.settings')
django.setup()

from books.models import Book, Category

# Create sample categories
fiction = Category.objects.create(
    name='Fiction',
    description='Fictional books including novels, short stories, and more'
)

non_fiction = Category.objects.create(
    name='Non-Fiction',
    description='Non-fictional books including biographies, academic texts, and more'
)

# Create sample books
book1 = Book.objects.create(
    title='The Great Gatsby',
    author='F. Scott Fitzgerald',
    description='A story of decadence and excess, Gatsby explores the American Dream in the 1920s.',
    price='9.99',
    isbn='9780743273565',
    publication_date=datetime.date(1925, 4, 10),
    stock=50
)
book1.categories.add(fiction)

book2 = Book.objects.create(
    title='A Brief History of Time',
    author='Stephen Hawking',
    description='A landmark volume in science writing by one of the great minds of our time.',
    price='14.99',
    isbn='9780553380163',
    publication_date=datetime.date(1988, 9, 1),
    stock=30
)
book2.categories.add(non_fiction)

print('Sample data created successfully!')
