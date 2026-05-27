import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { allProducts, categories } from '../data'

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')
  
  // Filter products based on active category and search query
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.categorySlug === activeCategory
    const matchesSearch = searchQuery === '' || 
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title)
    }
    return 0
  })
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Κατάστημα</h1>
        
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Αναζήτηση προϊόντων..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
            />
            <svg
              className="absolute w-5 h-5 text-gray-400 left-3 top-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Sidebar - Filters */}
          <div className="md:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Κατηγορίες</h2>
              <div className="mb-6 space-y-2">
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-coffee text-white'
                      : 'bg-coffee-light/20 text-coffee hover:bg-coffee-light/40'
                  }`}
                  onClick={() => setActiveCategory('all')}
                >
                  Όλα τα Προϊόντα
                </button>
                {categories.map((category) => (
                  <button
                    key={category.slug}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.slug
                        ? 'bg-coffee text-white'
                        : 'bg-coffee-light/20 text-coffee hover:bg-coffee-light/40'
                    }`}
                    onClick={() => setActiveCategory(category.slug)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Φίλτρα</h2>
              <div className="mb-6">
                <h3 className="mb-2 font-medium">Τιμή</h3>
                <p className="text-sm text-gray-600">Επικοινωνήστε για τιμές</p>
              </div>
              
              <h3 className="mb-2 font-medium">Ταξινόμηση</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
              >
                <option value="name">Αλφαβητικά</option>
              </select>
            </div>
          </div>
          
          {/* Main Content - Products */}
          <div className="md:col-span-3">
            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                {sortedProducts.length} προϊόντα βρέθηκαν
              </p>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedProducts.map((product, index) => (
                <motion.div
                  key={product.slug}
                  className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <div className="relative">
                    <Link to={`/product/${product.slug}`}>
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="object-cover w-full h-48 hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link to={`/product/${product.slug}`}>
                      <h3 className="mb-2 text-lg font-bold hover:text-coffee transition-colors">
                        {product.title}
                      </h3>
                    </Link>
                    <p className="mb-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                    {(product as any).quantity && (
                      <p className="mb-2 text-xs text-gray-500">{(product as any).quantity}</p>
                    )}
                    <div className="flex items-center justify-between">
                      <Link
                        to={`/product/${product.slug}`}
                        className="px-4 py-2 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
                      >
                        Περισσότερα
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {sortedProducts.length === 0 && (
              <div className="p-8 text-center bg-white rounded-lg shadow-md">
                <h3 className="mb-2 text-xl font-bold">Δεν βρέθηκαν προϊόντα</h3>
                <p className="mb-4">Δοκιμάστε να αλλάξετε τα φίλτρα αναζήτησης ή να επιλέξετε μια διαφορετική κατηγορία.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('all')
                    setSearchQuery('')
                  }}
                  className="px-4 py-2 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
                >
                  Επαναφορά Φίλτρων
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop