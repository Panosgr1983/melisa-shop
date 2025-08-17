import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const IdeasPost = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [relatedPosts, setRelatedPosts] = useState<any[]>([])
  
  useEffect(() => {
    // Simulate API call to fetch ideas post
    setLoading(true)
    
    // Find the post data
    const foundPost = ideasPosts.find(p => p.slug === slug)
    
    if (foundPost) {
      setPost(foundPost)
      
      // Find related posts (same category, excluding current post)
      const related = ideasPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3)
      
      setRelatedPosts(related)
    }
    
    setLoading(false)
  }, [slug])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-coffee rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }
  
  if (!post) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Η ιδέα δεν βρέθηκε</h1>
            <p className="mb-6">Η ιδέα που αναζητάτε δεν είναι διαθέσιμη.</p>
            <Link to="/ideas" className="btn btn-primary">
              Επιστροφή στις Ιδέες
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
          <Link to="/ideas" className="text-coffee hover:text-coffee-dark">
            &larr; Ιδέες
          </Link>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Main Content */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div className="relative h-80">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 text-sm text-coffee bg-coffee-light/20 rounded-full">
                    {ideasCategories.find(cat => cat.id === post.category)?.name}
                  </span>
                  <span className="ml-3 text-sm text-gray-500">{post.date}</span>
                </div>
                <h1 className="mb-6 text-3xl font-bold font-serif text-coffee">{post.title}</h1>
                
                <div className="prose max-w-none">
                  {post.content.map((paragraph: string, index: number) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                  
                  {post.ingredients && (
                    <div className="mt-8">
                      <h2 className="mb-4 text-2xl font-bold text-coffee">Υλικά</h2>
                      <ul className="pl-5 mt-4 mb-6 space-y-2 list-disc">
                        {post.ingredients.map((ingredient: string, index: number) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {post.instructions && (
                    <div className="mt-8">
                      <h2 className="mb-4 text-2xl font-bold text-coffee">Οδηγίες</h2>
                      <ol className="pl-5 mt-4 mb-6 space-y-3 list-decimal">
                        {post.instructions.map((instruction: string, index: number) => (
                          <li key={index}>{instruction}</li>
                        ))}
                      </ol>
                    </div>
                  )}
                  
                  {post.tips && (
                    <div className="mt-8 p-6 bg-coffee-light/10 rounded-lg">
                      <h3 className="mb-4 text-xl font-bold text-coffee">Συμβουλές</h3>
                      <ul className="space-y-2">
                        {post.tips.map((tip: string, index: number) => (
                          <li key={index} className="flex items-start">
                            <span className="inline-block w-2 h-2 mt-2 mr-3 bg-coffee rounded-full"></span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Κατηγορίες</h2>
              <div className="mb-6 space-y-2">
                {ideasCategories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/ideas?category=${category.id}`}
                    className="block px-3 py-2 text-coffee bg-coffee-light/20 rounded-md hover:bg-coffee-light/40"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              
              {relatedPosts.length > 0 && (
                <>
                  <h2 className="mb-4 text-xl font-bold font-serif text-coffee">Σχετικές Ιδέες</h2>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <div key={relatedPost.id} className="flex items-start">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title} 
                          className="object-cover w-16 h-16 mr-3 rounded-md"
                        />
                        <div>
                          <Link 
                            to={`/ideas/${relatedPost.slug}`} 
                            className="font-medium hover:text-coffee"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-xs text-gray-500">{relatedPost.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    content: [
      'Η μεσογειακή διατροφή είναι γνωστή για τα οφέλη της στην υγεία, και αυτή η σαλάτα αποτελεί ένα τέλειο παράδειγμα. Συνδυάζει φρέσκα λαχανικά με θρεπτικούς ξηρούς καρπούς και την κλασική ελληνική φέτα.',
      'Τα καρύδια προσθέτουν μια πλούσια, ελαιώδη γεύση και παρέχουν υγιεινά λιπαρά ωμέγα-3, ενώ η φέτα δίνει την αλμυρή νότα που χρειάζεται η σαλάτα για να είναι πλήρης.'
    ],
    ingredients: [
      '2 φλιτζάνια μικτά φύλλα σαλάτας (ρόκα, μαρούλι, σπανάκι)',
      '1/2 φλιτζάνι καρύδια, τραγανά',
      '100γρ φέτα, κομμένη σε κύβους',
      '1 αγγούρι, κομμένο σε ροδέλες',
      '2 ντομάτες, κομμένες σε φέτες',
      '1/4 φλιτζάνι ελαιόλαδο',
      '2 κουταλιές της σούπας ξίδι βαλσάμικο',
      '1 κουταλιά του γλυκού μέλι',
      'Αλάτι και πιπέρι'
    ],
    instructions: [
      'Σε ένα μεγάλο μπολ, ανακατέψτε τα φύλλα σαλάτας, το αγγούρι και τις ντομάτες.',
      'Προσθέστε τα καρύδια και τη φέτα.',
      'Σε ένα μικρό μπολ, χτυπήστε το ελαιόλαδο, το ξίδι και το μέλι μέχρι να ενωθούν.',
      'Προσθέστε αλάτι και πιπέρι κατά βούληση.',
      'Περιχύστε τη σαλάτα με το ντρέσινγκ και ανακατέψτε απαλά.',
      'Σερβίρετε αμέσως.'
    ],
    tips: [
      'Για πιο έντονη γεύση, ψήστε ελαφρά τα καρύδια σε ένα τηγάνι για 2-3 λεπτά.',
      'Μπορείτε να προσθέσετε ελιές Καλαμάτας για επιπλέον μεσογειακή γεύση.',
      'Η σαλάτα είναι καλύτερη όταν σερβίρεται αμέσως, αλλά μπορεί να διατηρηθεί στο ψυγείο για 1-2 ημέρες.'
    ]
  }
];

export default IdeasPost