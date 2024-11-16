const GOOGLE_BOOKS_API_URL = 'https://www.googleapis.com/books/v1/volumes';

export interface GoogleBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description?: string;
    imageLinks?: {
      thumbnail: string;
      smallThumbnail: string;
    };
    publishedDate?: string;
    publisher?: string;
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    language?: string;
    previewLink?: string;
    infoLink?: string;
    saleInfo?: {
      listPrice?: {
        amount: number;
        currencyCode: string;
      };
      retailPrice?: {
        amount: number;
        currencyCode: string;
      };
    };
  };
}

export interface GoogleBooksResponse {
  items: GoogleBook[];
  totalItems: number;
  kind: string;
}

export async function searchGoogleBooks(query: string, startIndex: number = 0, maxResults: number = 20): Promise<GoogleBooksResponse> {
  const params = new URLSearchParams({
    q: query,
    startIndex: startIndex.toString(),
    maxResults: maxResults.toString(),
    langRestrict: 'en',
    printType: 'books',
    orderBy: 'relevance',
  });

  const response = await fetch(`${GOOGLE_BOOKS_API_URL}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch books from Google Books API');
  }
  return response.json();
}

export async function getGoogleBookById(bookId: string): Promise<GoogleBook> {
  const response = await fetch(`${GOOGLE_BOOKS_API_URL}/${bookId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch book details from Google Books API');
  }
  return response.json();
}

export function formatBookData(googleBook: GoogleBook) {
  // Get the highest quality image available
  const imageUrl = googleBook.volumeInfo.imageLinks?.thumbnail
    ?.replace('&edge=curl', '')
    ?.replace('zoom=1', 'zoom=3')
    ?.replace('http://', 'https://') || '/placeholder-book.png';

  return {
    id: googleBook.id,
    title: googleBook.volumeInfo.title,
    author: googleBook.volumeInfo.authors?.[0] || 'Unknown Author',
    description: googleBook.volumeInfo.description || '',
    image: imageUrl,
    price: googleBook.volumeInfo?.saleInfo?.listPrice?.amount || 9.99,
    originalPrice: googleBook.volumeInfo?.saleInfo?.retailPrice?.amount,
    rating: googleBook.volumeInfo.averageRating || 0,
    category: googleBook.volumeInfo.categories?.[0] || 'General',
    publisher: googleBook.volumeInfo.publisher,
    publishedDate: googleBook.volumeInfo.publishedDate,
    pageCount: googleBook.volumeInfo.pageCount,
    language: googleBook.volumeInfo.language,
    previewLink: googleBook.volumeInfo.previewLink,
    infoLink: googleBook.volumeInfo.infoLink,
  };
}
