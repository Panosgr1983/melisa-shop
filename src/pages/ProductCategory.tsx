import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiGrid, FiList } from 'react-icons/fi'
import { getProductsByCategory, getCategoryBySlug } from '../data'

const ProductCategory = () => {
  const { category } = useParams<{ category: string }>()
  const [products, setProducts] = useState<any[]>([])
  const [categoryData, setCategoryData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('name')
  const [viewMode, setViewMode] = useState<'menu' | 'grid'>('menu') // Default to menu view
  
  useEffect(() => {
    if (category) {
      setLoading(true)
      
      // Get category data
      const cat = getCategoryBySlug(category)
      setCategoryData(cat)
      
      // Get products for this category
      const categoryProducts = getProductsByCategory(category)
      setProducts(categoryProducts)
      
      setLoading(false)
    }
  }, [category])
  
  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === 'name') {
      return a.title.localeCompare(b.title)
    } else if (sortBy === 'price-low') {
      return a.price - b.price
    } else if (sortBy === 'price-high') {
      return b.price - a.price
    }
    return 0
  })

  const productCountText = products.length === 0 ? 'Κανένα προϊόν' : products.length === 1 ? '1 προϊόν' : `${products.length} προϊόντα`;
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-coffee rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }

  if (!categoryData) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Η κατηγορία δεν βρέθηκε</h1>
            <p className="mb-6">Η κατηγορία που αναζητάτε δεν είναι διαθέσιμη.</p>
            <Link to="/products" className="inline-block px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors">
              Επιστροφή στις Κατηγορίες
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <Link to="/products" className="text-coffee hover:text-coffee-dark">
            &larr; Όλες οι Κατηγορίες
          </Link>
        </div>
        
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">{categoryData.name}</h1>
        
        {/* Filters and Controls */}
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-600">{productCountText}</span>
            
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
          
          <div className="flex items-center space-x-4">
            <label htmlFor="sort" className="font-medium text-gray-600">Ταξινόμηση:</label>
            <select 
              id="sort" 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
            >
              <option value="name">Αλφαβητικά</option>
              <option value="price-low">Τιμή (Χαμηλή &rarr; Υψηλή)</option>
              <option value="price-high">Τιμή (Υψηλή &rarr; Χαμηλή)</option>
            </select>
          </div>
        </div>
        
        {/* Products Display */}
        {viewMode === 'menu' ? (
          /* Menu View - Restaurant Style */
          <div className="space-y-4">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.slug}
                className="relative max-[540px]:pb-16 flex flex-col md:flex-row items-center md:items-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link to={`/product/${product.slug}`}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="object-cover w-24 h-24 mx-auto md:mx-0 mr-0 md:mr-6 rounded-lg hover:scale-105 transition-transform duration-300 shrink-0"
                  />
                </Link>
                <div className="flex-grow w-full">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                    <div className="min-w-0 text-center md:text-left">
                      <Link to={`/product/${product.slug}`}>
                        <h3 className="text-xl font-bold text-coffee mb-2 hover:text-coffee-dark transition-colors">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-gray-600 mb-2 max-w-2xl">{product.description}</p>
                      {product.quantity && (
                        <p className="text-sm text-gray-500">{product.quantity}</p>
                      )}
                    </div>
                    <div className="order-last md:order-none flex justify-center md:justify-end mt-4 md:mt-0 w-full max-[540px]:absolute max-[540px]:bottom-4 max-[540px]:left-1/2 max-[540px]:-translate-x-1/2">
                      <Link
                        to={`/product/${product.slug}`}
                        className="inline-block whitespace-nowrap px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
                      >
                        Περισσότερα
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          /* Grid View - Card Style */
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                <div className="p-6">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="mb-2 text-lg font-bold hover:text-coffee transition-colors">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="mb-3 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                  {product.quantity && (
                    <p className="mb-3 text-xs text-gray-500">{product.quantity}</p>
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
        )}
        
        {products.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-lg">Δεν βρέθηκαν προϊόντα σε αυτή την κατηγορία.</p>
            <Link to="/products" className="mt-4 inline-block px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors">
              Επιστροφή στις Κατηγορίες
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCategory