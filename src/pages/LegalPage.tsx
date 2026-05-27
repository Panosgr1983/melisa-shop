import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePageTitle } from '../hooks/usePageTitle'

const LegalPage = () => {
  usePageTitle('Νομικά')
  const { page } = useParams<{ page: string }>()
  const [pageData, setPageData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call to fetch legal page content
    setLoading(true)
    
    // Find the page data
    const foundPage = legalPages.find(p => p.id === page)
    
    if (foundPage) {
      setPageData(foundPage)
    }
    
    setLoading(false)
  }, [page])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-coffee rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }
  
  if (!pageData) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Η σελίδα δεν βρέθηκε</h1>
            <p className="mb-6">Η σελίδα που αναζητάτε δεν είναι διαθέσιμη.</p>
            <Link to="/" className="btn btn-primary">
              Επιστροφή στην Αρχική
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="mb-8 text-3xl font-bold text-center font-serif text-coffee">{pageData.title}</h1>
          
          <div className="p-8 bg-white rounded-lg shadow-md">
            <p className="mb-4 text-sm text-gray-500">
              Τελευταία ενημέρωση: {pageData.lastUpdated}
            </p>
            
            <div className="prose max-w-none">
              {pageData.content.map((section: any, index: number) => (
                <div key={index} className="mb-8">
                  {section.title && (
                    <h2 className="mb-4 text-xl font-bold text-coffee">{section.title}</h2>
                  )}
                  
                  {section.paragraphs.map((paragraph: string, pIndex: number) => (
                    <p key={pIndex} className="mb-4">{paragraph}</p>
                  ))}
                  
                  {section.list && (
                    <ul className="pl-5 mt-4 mb-6 space-y-2 list-disc">
                      {section.list.map((item: string, lIndex: number) => (
                        <li key={lIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Για περισσότερες πληροφορίες,
                <Link to="/contact" className="ml-1 text-coffee hover:text-coffee-dark">
                  επικοινωνήστε μαζί μας
                </Link>.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Link to="/" className="btn btn-secondary">
              Επιστροφή στην Αρχική
            </Link>
            <Link to="/contact" className="btn btn-primary">
              Επικοινωνία
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Sample data
const legalPages = [
  {
    id: 'privacy-policy',
    title: 'Πολιτική Απορρήτου',
    lastUpdated: '15 Μαρτίου 2023',
    content: [
      {
        title: 'Εισαγωγή',
        paragraphs: [
          'Η παρούσα Πολιτική Απορρήτου περιγράφει τον τρόπο με τον οποίο το Melisa συλλέγει, χρησιμοποιεί και προστατεύει τις προσωπικές σας πληροφορίες όταν χρησιμοποιείτε την ιστοσελίδα μας ή επισκέπτεστε το κατάστημά μας.',
          'Δεσμευόμαστε να προστατεύουμε το απόρρητο των προσωπικών σας δεδομένων. Οποιεσδήποτε πληροφορίες ζητάμε από εσάς θα χρησιμοποιηθούν μόνο σύμφωνα με την παρούσα πολιτική απορρήτου.'
        ]
      },
      {
        title: 'Πληροφορίες που Συλλέγουμε',
        paragraphs: [
          'Μπορεί να συλλέξουμε τις ακόλουθες πληροφορίες:'
        ],
        list: [
          'Ονοματεπώνυμο',
          'Στοιχεία επικοινωνίας, συμπεριλαμβανομένης της διεύθυνσης ηλεκτρονικού ταχυδρομείου και του αριθμού τηλεφώνου',
          'Δημογραφικές πληροφορίες, όπως ταχυδρομικός κώδικας, προτιμήσεις και ενδιαφέροντα',
          'Άλλες πληροφορίες σχετικές με τις έρευνες πελατών και/ή προσφορές'
        ]
      }
    ]
  }
];

export default LegalPage