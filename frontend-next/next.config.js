/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['books.google.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'books.google.com',
        pathname: '/books/content/**',
      },
      {
        protocol: 'https',
        hostname: 'books.google.com',
        pathname: '/books/content/**',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
