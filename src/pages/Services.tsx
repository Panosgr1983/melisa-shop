import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

const Services = () => {
  usePageTitle('Υπηρεσίες')
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Οι Υπηρεσίες μας</h1>
        
        {/* Services Overview */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Gift Baskets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Gift Baskets" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h2 className="text-2xl font-bold text-white font-serif">
                  Καλάθια Δώρων
                </h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Gift Basket Example 1" 
                  className="object-cover w-full h-40 rounded-lg shadow-sm"
                />
                <img 
                  src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" 
                  alt="Gift Basket Example 2" 
                  className="object-cover w-full h-40 rounded-lg shadow-sm"
                />
              </div>
              <p className="mb-6 text-gray-600">
                Δημιουργούμε μοναδικά καλάθια δώρων για κάθε περίσταση, γεμάτα με εκλεκτά προϊόντα και προσαρμοσμένα στις προτιμήσεις σας.
              </p>
              <h3 className="mb-4 text-xl font-bold text-coffee">Επιλογές Καλαθιών Δώρων:</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Προσχεδιασμένα καλάθια για κάθε περίσταση</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Προσαρμοσμένα καλάθια με τα αγαπημένα σας προϊόντα</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Εταιρικά δώρα και ειδικές προσφορές</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Εποχιακά καλάθια για γιορτές και ειδικές περιστάσεις</span>
                </li>
              </ul>
              <Link 
                to="/services/gift-baskets" 
                className="inline-block px-4 py-2 text-white bg-coffee rounded-md hover:bg-coffee-dark"
              >
                Περισσότερες Πληροφορίες
              </Link>
            </div>
          </motion.div>
          
          {/* Catering */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-hidden bg-white rounded-lg shadow-md"
          >
            <div className="relative h-64">
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80" 
                alt="Catering" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h2 className="text-2xl font-bold text-white font-serif">
                  Catering
                </h2>
              </div>
            </div>
            <div className="p-6">
              <p className="mb-6 text-gray-600">
                Προσφέρουμε υπηρεσίες catering για εταιρικές εκδηλώσεις, γάμους και άλλες ειδικές περιστάσεις.
              </p>
              <h3 className="mb-4 text-xl font-bold text-coffee">Υπηρεσίες Catering:</h3>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Εταιρικές εκδηλώσεις και συναντήσεις</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Γάμοι και δεξιώσεις</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Πλατό με ξηρούς καρπούς και αποξηραμένα φρούτα</span>
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  <span>Πακέτα σνακ για γραφεία</span>
                </li>
              </ul>
              <Link 
                to="/services/catering" 
                className="inline-block px-4 py-2 text-white bg-coffee rounded-md hover:bg-coffee-dark"
              >
                Περισσότερες Πληροφορίες
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Testimonials */}
        <section className="py-16 mt-12">
          <h2 className="mb-10 text-2xl font-bold text-center font-serif text-coffee">Τι Λένε οι Πελάτες μας για τις Υπηρεσίες μας</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {serviceTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 mr-4 rounded-full"
                  />
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA */}
        <section className="p-8 mt-12 text-center bg-coffee-light/20 rounded-lg">
          <h2 className="mb-4 text-2xl font-bold font-serif text-coffee">Ενδιαφέρεστε για τις Υπηρεσίες μας;</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Επικοινωνήστε μαζί μας για να συζητήσουμε πώς μπορούμε να καλύψουμε τις ανάγκες σας. 
            Είτε πρόκειται για ένα μοναδικό δώρο είτε για catering σε μια σημαντική εκδήλωση, είμαστε εδώ για να βοηθήσουμε.
          </p>
          <Link to="/contact" className="inline-block px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark transition-colors">
            Επικοινωνήστε Μαζί μας
          </Link>
        </section>
      </div>
    </div>
  )
}

// Sample data
const serviceTestimonials = [
  {
    name: "Ελένη Παπαδοπούλου",
    service: "Καλάθι Δώρου",
    quote: "Παρήγγειλα ένα καλάθι δώρου για τα γενέθλια της μητέρας μου και ήταν υπέροχο! Η παρουσίαση ήταν εντυπωσιακή και η ποιότητα των προϊόντων εξαιρετική.",
    avatar: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    name: "Γιάννης Δημητρίου",
    service: "Εταιρικό Catering",
    quote: "Χρησιμοποιήσαμε τις υπηρεσίες catering του Melisa για ένα εταιρικό event και όλοι οι συνάδελφοι έμειναν ενθουσιασμένοι. Τα πλατό με τους ξηρούς καρπούς και τα γλυκά ήταν εξαιρετικά!",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Μαρία Κωνσταντίνου",
    service: "Προσαρμοσμένο Καλάθι Δώρου",
    quote: "Ζήτησα ένα προσαρμοσμένο καλάθι δώρου με τα αγαπημένα προϊόντα του συζύγου μου και το αποτέλεσμα ξεπέρασε τις προσδοκίες μου. Η εξυπηρέτηση ήταν άψογη και το δώρο έκανε μεγάλη εντύπωση!",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg"
  }
];

export default Services