import { Navbar } from '../components/Navbar'
import { ProductList } from '../components/ProductList'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-heading font-medium text-gray-900 mb-4">
              Discover Your Next Favorite Book
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore our vast collection of books across all genres. From bestsellers to hidden gems,
              find the perfect read for every moment.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors duration-200">
                Browse Categories
              </button>
              <button className="px-6 py-3 bg-white text-primary border border-primary rounded-lg hover:bg-primary/5 transition-colors duration-200">
                View Bestsellers
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-medium text-gray-900">
            Featured Books
          </h2>
          <button className="text-primary hover:text-primary-dark transition-colors duration-200">
            View All →
          </button>
        </div>
        <ProductList />
      </div>
    </main>
  )
}
