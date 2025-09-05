import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiStar, FiHeart, FiShare2, FiShoppingCart } from 'react-icons/fi'
import { getProductBySlug, getCategoryBySlug, getProductsByCategory } from '../data'

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>()
  const [product, setProduct] = useState<any>(null)
  const [category, setCategory] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (slug) {
      setLoading(true)
      
      // Get product data
      const productData = getProductBySlug(slug)
      
      if (productData) {
        setProduct(productData)
        
        // Get category data
        const categoryData = getCategoryBySlug(productData.categorySlug)
        setCategory(categoryData)
        
        // Get related products (same category, excluding current product)
        const categoryProducts = getProductsByCategory(productData.categorySlug)
        const related = categoryProducts
          .filter(p => p.slug !== slug)
          .slice(0, 4)
        setRelatedProducts(related)
      }
      
      setLoading(false)
    }
  }, [slug])

  // Scroll to top when slug changes (navigating to another product)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-coffee rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Το προϊόν δεν βρέθηκε</h1>
            <p className="mb-6">Το προϊόν που αναζητάτε δεν είναι διαθέσιμο.</p>
            <Link to="/products" className="inline-block px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors">
              Επιστροφή στα Προϊόντα
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Create multiple images for the product (using the same image with different parameters for demo)
  const productImages = [product.image]

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log(`Added ${quantity} of ${product.title} to cart`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: product.description,
        url: window.location.href,
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Ο σύνδεσμος αντιγράφηκε στο clipboard!')
    }
  }

  return (
    <div className="py-12">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-coffee hover:text-coffee-dark">Αρχική</Link>
            <span className="text-gray-400">/</span>
            <Link to="/products" className="text-coffee hover:text-coffee-dark">Προϊόντα</Link>
            <span className="text-gray-400">/</span>
            {category && (
              <>
                <Link to={`/products/${category.slug}`} className="text-coffee hover:text-coffee-dark">
                  {category.name}
                </Link>
                <span className="text-gray-400">/</span>
              </>
            )}
            <span className="text-gray-600">{product.title}</span>
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative overflow-hidden bg-gray-100 rounded-lg aspect-square">
                <img
                  src={productImages[selectedImage]}
                  alt={product.title}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Category Badge */}
            {category && (
              <Link 
                to={`/products/${category.slug}`}
                className="inline-block px-3 py-1 text-sm text-coffee bg-coffee-light/20 rounded-full hover:bg-coffee-light/30 transition-colors"
              >
                {category.name}
              </Link>
            )}

            {/* Title and Rating */}
            <div>
              <h1 className="mb-2 text-3xl font-bold text-coffee font-serif">{product.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      size={16}
                      className={i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(4.2 από 5 - 24 αξιολογήσεις)</span>
              </div>
            </div>


            {/* Description */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Περιγραφή</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
              
              {/* Extended Description */}
              <div className="space-y-3">
                <p className="text-gray-700">
                  Αυτό το εξαιρετικό προϊόν προέρχεται από επιλεγμένους παραγωγούς και διακρίνεται για την 
                  ανώτερη ποιότητά του. Ιδανικό για όσους αναζητούν γεύση και θρεπτική αξία σε κάθε μπουκιά.
                </p>
                <p className="text-gray-700">
                  Πλούσιο σε βιταμίνες, μέταλλα και αντιοξειδωτικά, αποτελεί την τέλεια επιλογή για υγιεινό 
                  σνακ ή συμπλήρωμα στη διατροφή σας. Διατηρείται φρέσκο για μεγάλο χρονικό διάστημα χάρη 
                  στη σωστή συσκευασία και αποθήκευση.
                </p>
              </div>
            </div>

            {/* Product Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold">Χαρακτηριστικά</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-3 bg-coffee rounded-full"></span>
                  100% φυσικό προϊόν χωρίς συντηρητικά
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-3 bg-coffee rounded-full"></span>
                  Πλούσιο σε πρωτεΐνες και υγιεινά λιπαρά
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-3 bg-coffee rounded-full"></span>
                  Ιδανικό για vegan και vegetarian διατροφή
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-3 bg-coffee rounded-full"></span>
                  Συσκευασία που διατηρεί τη φρεσκάδα
                </li>
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex space-x-4">
              <Link
                to="/contact"
                className="flex-1 flex items-center justify-center px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
              >
                Βρείτε μας
              </Link>
              <button
                onClick={handleShare}
                className="px-4 py-3 text-coffee border border-coffee rounded-md hover:bg-coffee hover:text-white transition-colors"
              >
                <FiShare2 size={20} />
              </button>
            </div>

            {/* Additional Info */}
            <div className="p-4 bg-coffee-light/10 rounded-lg">
              <h4 className="mb-2 font-bold">Πληροφορίες</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Φρέσκα προϊόντα καθημερινά</li>
                <li>• Προσεκτική επιλογή και ποιότητα</li>
                <li>• Επικοινωνήστε για διαθεσιμότητα</li>
              </ul>
            </div>
          </motion.div>
        </div>

          {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">
              Σχετικά Προϊόντα
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col h-full overflow-hidden bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link to={`/product/${relatedProduct.slug}`}>
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="object-contain w-full h-48 p-2 bg-white transition-transform duration-300 hover:scale-105"
                    />
                  </Link>
                  <div className="p-4 flex flex-col flex-1">
                    <Link to={`/product/${relatedProduct.slug}`}>
                      <h3 className="mb-2 font-bold hover:text-coffee transition-colors">
                        {relatedProduct.title}
                      </h3>
                    </Link>
                    <div className="flex-grow">
                      <p className="mb-3 text-sm text-gray-600 line-clamp-2">
                        {relatedProduct.description}
                      </p>
                    </div>
                    <div className="flex justify-center mt-auto">
                      <Link
                        to={`/product/${relatedProduct.slug}`}
                        className="px-3 py-2 text-sm text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors"
                      >
                        Περισσότερα
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails