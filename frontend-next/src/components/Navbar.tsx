'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ShoppingCartIcon, 
  UserIcon, 
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon 
} from '@heroicons/react/24/outline';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50" suppressHydrationWarning>
      <div className="container mx-auto px-4" suppressHydrationWarning>
        <div className="flex items-center justify-between h-16" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-heading font-medium text-gray-900">
              BookStore
            </span>
          </Link>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8" suppressHydrationWarning>
            <form onSubmit={handleSearch} className="w-full" suppressHydrationWarning>
              <div className="relative" suppressHydrationWarning>
                <input
                  type="text"
                  placeholder="Search for books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                >
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8" suppressHydrationWarning>
            <Link
              href="/categories"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Categories
            </Link>
            <Link
              href="/bestsellers"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              Bestsellers
            </Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4" suppressHydrationWarning>
            <Link
              href="/cart"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <span className="sr-only">Shopping cart</span>
              <div className="relative" suppressHydrationWarning>
                <ShoppingCartIcon className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </Link>
            <Link
              href="/account"
              className="text-gray-600 hover:text-primary transition-colors duration-200"
            >
              <span className="sr-only">User account</span>
              <UserIcon className="h-6 w-6" />
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 hover:text-primary"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4" suppressHydrationWarning>
            <div className="px-2 pt-2 pb-3 space-y-1" suppressHydrationWarning>
              <form onSubmit={handleSearch} className="mb-4" suppressHydrationWarning>
                <div className="relative" suppressHydrationWarning>
                  <input
                    type="text"
                    placeholder="Search for books..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary"
                  >
                    <MagnifyingGlassIcon className="h-5 w-5" />
                  </button>
                </div>
              </form>
              <Link
                href="/categories"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              >
                Categories
              </Link>
              <Link
                href="/bestsellers"
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50 rounded-md"
              >
                Bestsellers
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
