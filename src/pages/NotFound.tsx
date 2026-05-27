import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { motion } from 'framer-motion'

const NotFound = () => {
  usePageTitle('Η σελίδα δεν βρέθηκε')
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl p-8 mx-auto text-center bg-white rounded-lg shadow-md"
        >
          <h1 className="mb-6 text-6xl font-bold text-coffee">404</h1>
          <h2 className="mb-6 text-2xl font-bold">Η σελίδα δεν βρέθηκε</h2>
          <p className="mb-8 text-gray-600">
            Η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.
            Παρακαλούμε ελέγξτε τη διεύθυνση URL ή επιστρέψτε στην αρχική σελίδα.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
            <Link to="/" className="btn btn-primary">
              Επιστροφή στην Αρχική
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Επικοινωνήστε Μαζί μας
            </Link>
          </div>
        </motion.div>
        
        <div className="mt-12 text-center">
          <h3 className="mb-6 text-xl font-bold">Μπορεί να σας ενδιαφέρουν:</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <Link to="/products" className="p-4 transition-colors bg-coffee-light/10 rounded-lg hover:bg-coffee-light/20">
              Προϊόντα
            </Link>
            <Link to="/services" className="p-4 transition-colors bg-coffee-light/10 rounded-lg hover:bg-coffee-light/20">
              Υπηρεσίες
            </Link>
            <Link to="/ideas" className="p-4 transition-colors bg-coffee-light/10 rounded-lg hover:bg-coffee-light/20">
              Ιδέες
            </Link>
            <Link to="/contact" className="p-4 transition-colors bg-coffee-light/10 rounded-lg hover:bg-coffee-light/20">
              Επικοινωνία
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound