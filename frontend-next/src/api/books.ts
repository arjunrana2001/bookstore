const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  category: string;
  description?: string;
}

export async function getBooks(): Promise<Book[]> {
  const response = await fetch(`${API_URL}/books/`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  return response.json();
}

export async function getBook(id: string): Promise<Book> {
  const response = await fetch(`${API_URL}/books/${id}/`);
  if (!response.ok) {
    throw new Error('Failed to fetch book');
  }
  return response.json();
}

export async function searchBooks(query: string): Promise<Book[]> {
  const response = await fetch(`${API_URL}/books/search/?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search books');
  }
  return response.json();
}
