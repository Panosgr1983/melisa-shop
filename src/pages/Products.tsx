import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGrid, FiList } from 'react-icons/fi'
import { categories, getProductsByCategory, allProducts } from '../data'
import ProductImage from '../components/ProductImage'

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'menu' | 'grid'>('grid') // Default to grid when viewing all categories

  // Ensure we always land at the top when visiting the page
  useEffect(() => {
    // Use 'auto' to avoid any smooth-scroll offset issues on initial mount
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  // Switch view mode automatically depending on selected category
  useEffect(() => {
    if (activeCategory === 'all') {
      setViewMode('grid');
    } else {
      setViewMode('menu');
    }
  }, [activeCategory]);

  // Get all products or filtered by category
  const filteredProducts = activeCategory === 'all' 
    ? allProducts 
    : getProductsByCategory(activeCategory)

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Ο κατάλογος μας</h1>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-8 gap-3">
          <button
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeCategory === 'all'
                ? 'bg-coffee text-white shadow-md'
                : 'bg-coffee-light/20 text-coffee hover:bg-coffee-light/40'
            }`}
            onClick={() => setActiveCategory('all')}
          >
            Όλες οι Κατηγορίες
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.slug
                  ? 'bg-coffee text-white shadow-md'
                  : 'bg-coffee-light/20 text-coffee hover:bg-coffee-light/40'
              }`}
              onClick={() => setActiveCategory(category.slug)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-start mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-600">{sortedProducts.length} προϊόντα</span>
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-coffee-light/10 rounded-lg p-1">
              <button
                onClick={() => setViewMode('menu')}
                className={`p-3 rounded-md transition-all duration-200 ${
                  viewMode === 'menu'
                    ? 'bg-coffee text-white shadow-sm'
                    : 'text-coffee hover:bg-coffee-light/20'
                }`}
                title="Προβολή Μενού"
              >
                <FiList size={18} />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-md transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-coffee text-white shadow-sm'
                    : 'text-coffee hover:bg-coffee-light/20'
                }`}
                title="Προβολή Πλέγματος"
              >
                <FiGrid size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Products Display */}
        {viewMode === 'menu' ? (
          /* Menu View - Restaurant Style */
          <div className="space-y-4">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                className="flex flex-col sm:flex-row items-start sm:items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProductImage 
                  src={product.image} 
                  alt={product.title} 
                  className="object-cover w-24 h-24 sm:mr-6 rounded-lg mb-4 sm:mb-0 mx-auto sm:mx-0"
                />
                <div className="flex-grow">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-coffee mb-2">{product.title}</h3>
                      <p className="text-gray-600 mb-2 max-w-2xl">{product.description}</p>
                      <p className="text-sm text-coffee-light">Κατηγορία: {categories.find(cat => cat.slug === product.categorySlug)?.name}</p>
                    </div>
                      <Link
                        to={`/product/${product.slug}`}
                        className="px-4 py-2 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors self-center sm:self-auto mt-2 sm:mt-0"
                      >
                        Περισσότερα
                      </Link>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Grid View - Category Cards Style */
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-8">
            {categories.map((category, index) => {
              const categoryProducts = getProductsByCategory(category.slug)
              const previewProducts = categoryProducts.slice(0, 3)
              
              // Skip empty categories when filtering
              if (activeCategory !== 'all' && activeCategory !== category.slug) {
                return null
              }
              
              return (
                <motion.div
                  key={category.slug}
                  className="overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="relative h-64">
                    {previewProducts.length > 0 && (
                      <ProductImage
                        src={previewProducts[0].image}
                        alt={category.name}
                        className="object-cover w-full h-full"
                      />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                      <h2 className="text-2xl font-bold text-white font-serif">
                        {category.name}
                      </h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="mb-4 text-gray-600">
                      Ανακαλύψτε την εκλεκτή συλλογή μας από {category.name.toLowerCase()}.
                    </p>
                    <div className="mb-6">
                      <h3 className="mb-3 text-lg font-bold">Διαθέσιμα προϊόντα: {categoryProducts.length}</h3>
                      {previewProducts.length > 0 && (
                        <div className="space-y-2">
                          {previewProducts.map((product) => (
                            <p key={product.slug} className="text-sm text-gray-600">
                              • {product.title}
                            </p>
                          ))}
                          {categoryProducts.length > 3 && (
                            <p className="text-sm text-coffee font-medium">
                              ...και {categoryProducts.length - 3} ακόμη προϊόντα
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                    <Link 
                      to={`/products/${category.slug}`}
                      className="block w-max mx-auto px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
                    >
                      Δείτε Όλα ({categoryProducts.length})
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        )}

        {sortedProducts.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-lg">Δεν βρέθηκαν προϊόντα.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Products 