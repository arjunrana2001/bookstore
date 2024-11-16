'use client';

import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaCreditCard,
  FaLock,
  FaTruck,
  FaHeadset
} from 'react-icons/fa';

const footerLinks = {
  shop: [
    { name: 'New Arrivals', href: '/new-arrivals' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Genres', href: '/genres' },
    { name: 'Special Offers', href: '/offers' },
  ],
  support: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping Info', href: '/shipping' },
    { name: 'Returns', href: '/returns' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  legal: [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const features = [
  { icon: FaTruck, text: 'Free shipping on orders over $50' },
  { icon: FaLock, text: 'Secure payment' },
  { icon: FaCreditCard, text: 'Flexible payment options' },
  { icon: FaHeadset, text: '24/7 customer support' },
];

export function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 text-gray-600">
              <feature.icon className="h-6 w-6 text-primary" />
              <span className="text-sm">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-gray-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-gray-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-base text-gray-600 hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Stay Updated</h3>
            <p className="mt-4 text-base text-gray-600">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="mt-4">
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input-primary"
                />
                <button
                  type="submit"
                  className="btn-primary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links & Legal */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaFacebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-base text-gray-500">
              © {new Date().getFullYear()} BookStore. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
