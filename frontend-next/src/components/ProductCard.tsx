'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HeartIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface ProductCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    image: string;
    price: number;
    originalPrice?: number;
    rating: number;
    category?: string;
    description?: string;
    publisher?: string;
    publishedDate?: string;
    pageCount?: number;
    previewLink?: string;
    infoLink?: string;
  };
}

export function ProductCard({ book }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <div
      className="group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {discount > 0 && (
        <div className="absolute top-2 left-2 z-10">
          <span className="bg-red-500 text-white text-sm font-medium px-2 py-1 rounded">
            {discount}% OFF
          </span>
        </div>
      )}
      
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white transition-colors duration-200"
      >
        {isWishlisted ? (
          <HeartSolidIcon className="h-5 w-5 text-red-500" />
        ) : (
          <HeartIcon className="h-5 w-5 text-gray-400 hover:text-red-500" />
        )}
      </button>

      <div className="aspect-w-3 aspect-h-4 relative overflow-hidden rounded-t-lg">
        <Image
          src={book.image}
          alt={book.title}
          fill
          className="object-contain hover:scale-105 transition-transform duration-200"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={100}
          priority={false}
          loading="lazy"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
              <ShoppingCartIcon className="h-5 w-5" />
              <span>Quick Add</span>
            </button>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{book.title}</h3>
        <p className="text-sm text-gray-600 mt-1">{book.author}</p>
        
        <div className="mt-2 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`h-4 w-4 ${
                i < Math.round(book.rating)
                  ? 'text-yellow-400 fill-current'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-600 ml-1">{book.rating.toFixed(1)}</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-baseline space-x-2">
            <span className="text-lg font-medium text-gray-900">${book.price.toFixed(2)}</span>
            {book.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${book.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {book.previewLink && (
            <a
              href={book.previewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:text-primary-dark transition-colors duration-200"
            >
              Preview
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
