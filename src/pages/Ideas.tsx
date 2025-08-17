import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Ideas = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Filter ideas by category
  const filteredIdeas = activeCategory === 'all' 
    ? ideasPosts 
    : ideasPosts.filter(post => post.category === activeCategory)
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Ιδέες</h1>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {filteredIdeas.map((post, index) => (
                <motion.div
                  key={post.id}
                  className="overflow-hidden bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="object-cover w-full h-48"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="px-2 py-1 text-xs text-coffee bg-coffee-light/20 rounded-full">
                        {post.categoryName}
                      </span>
                      <span className="ml-2 text-xs text-gray-500">
                        {post.date}
                      </span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold">{post.title}</h2>
                    <p className="mb-4 text-gray-600">{post.excerpt}</p>
                    <Link 
                      to={`/ideas/${post.slug}`} 
                      className="text-coffee hover:text-coffee-dark"
                    >
                      Διαβάστε περισσότερα &rarr;
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredIdeas.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-lg">Δεν βρέθηκαν ιδέες σε αυτή την κατηγορία.</p>
                <button 
                  className="mt-4 btn btn-primary"
                  onClick={() => setActiveCategory('all')}
                >
                  Δείτε Όλες τις Ιδέες
                </button>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Κατηγορίες</h2>
              <div className="space-y-2">
                <button
                  className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-coffee text-white'
                      : 'hover:bg-coffee-light/20'
                  }`}
                  onClick={() => setActiveCategory('all')}
                >
                  Όλες οι Κατηγορίες
                </button>
                {ideasCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                      activeCategory === category.id
                        ? 'bg-coffee text-white'
                        : 'hover:bg-coffee-light/20'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Πρόσφατες Ιδέες</h2>
              <div className="space-y-4">
                {ideasPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="object-cover w-16 h-16 mr-3 rounded"
                    />
                    <div>
                      <h3 className="font-medium">
                        <Link 
                          to={`/ideas/${post.slug}`} 
                          className="hover:text-coffee"
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Sample data
const ideasCategories = [
  { id: 'salads', name: 'Σαλάτες' },
  { id: 'snacks', name: 'Υγιεινά Σνακ' },
  { id: 'breakfast', name: 'Πρωινό' },
  { id: 'desserts', name: 'Γλυκά' }
];

const ideasPosts = [
  {
    id: 1,
    title: 'Μεσογειακή Σαλάτα με Καρύδια και Φέτα',
    slug: 'mediterranean-salad-walnuts-feta',
    excerpt: 'Μια δροσερή σαλάτα που συνδυάζει τη φρεσκάδα των λαχανικών με την πλούσια γεύση των καρυδιών.',
    category: 'salads',
    categoryName: 'Σαλάτες',
    date: '15 Μαρτίου 2024',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Σαλάτα Ρόκας με Αμύγδαλα και Αποξηραμένα Cranberries',
    slug: 'arugula-salad-almonds-cranberries',
    excerpt: 'Η πικάντικη ρόκα συναντά τα τραγανά αμύγδαλα και τα γλυκά cranberries για μια εκρηκτική γεύση.',
    category: 'salads',
    categoryName: 'Σαλάτες',
    date: '10 Μαρτίου 2024',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    title: 'Μίξ Ξηρών Καρπών για το Γραφείο',
    slug: 'office-nuts-mix',
    excerpt: 'Το τέλειο σνακ για να σας κρατήσει ενεργούς κατά τη διάρκεια της εργάσιμης ημέρας.',
    category: 'snacks',
    categoryName: 'Υγιεινά Σνακ',
    date: '5 Μαρτίου 2024',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 4,
    title: 'Overnight Oats με Φουντούκια και Μέλι',
    slug: 'overnight-oats-hazelnuts-honey',
    excerpt: 'Ένα θρεπτικό πρωινό που προετοιμάζεται το βράδυ και σας περιμένει έτοιμο το πρωί.',
    category: 'breakfast',
    categoryName: 'Πρωινό',
    date: '1 Μαρτίου 2024',
    image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 5,
    title: 'Σπιτικές Μπάλες Ενέργειας με Χουρμάδες',
    slug: 'homemade-energy-balls-dates',
    excerpt: 'Γλυκές και θρεπτικές μπάλες ενέργειας που θα σας δώσουν τη δύναμη που χρειάζεστε.',
    category: 'desserts',
    categoryName: 'Γλυκά',
    date: '25 Φεβρουαρίου 2024',
    image: 'https://images.unsplash.com/photo-1590137876181-2a5a7e340308?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 6,
    title: 'Σαλάτα Κινόα με Φιστίκια Αιγίνης',
    slug: 'quinoa-salad-pistachios',
    excerpt: 'Μια πρωτεϊνούχα σαλάτα που συνδυάζει την κινόα με τα αρωματικά φιστίκια Αιγίνης.',
    category: 'salads',
    categoryName: 'Σαλάτες',
    date: '20 Φεβρουαρίου 2024',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  }
];

export default Ideas