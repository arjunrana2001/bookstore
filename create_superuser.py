import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bookstore_project.settings')
django.setup()

from django.contrib.auth.models import User

# Create superuser
username = 'admin'
email = 'admin@example.com'
password = 'admin123'

try:
    superuser = User.objects.create_superuser(
        username=username,
        email=email,
        password=password
    )
    print(f'Superuser {username} created successfully!')
except Exception as e:
    print(f'Error creating superuser: {str(e)}')
