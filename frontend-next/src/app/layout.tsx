import './globals.css';
import { Inter, Marcellus } from 'next/font/google';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const marcellus = Marcellus({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-marcellus',
});

export const metadata = {
  title: 'Bookstore | Your Online Book Haven',
  description: 'Discover your next favorite book at our online bookstore. Wide selection of genres, competitive prices, and fast delivery.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${marcellus.variable}`}>
      <body className="min-h-screen bg-gray-50">
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
