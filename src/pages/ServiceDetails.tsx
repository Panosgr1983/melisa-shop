import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServiceDetails = () => {
  const { service } = useParams<{ service: string }>()
  const [serviceData, setServiceData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Simulate API call to fetch service details
    setLoading(true)
    
    // Find the service data
    const foundService = services.find(s => s.id === service)
    
    if (foundService) {
      setServiceData(foundService)
    }
    
    setLoading(false)
  }, [service])
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-12 h-12 border-4 border-coffee rounded-full border-t-transparent animate-spin"></div>
      </div>
    )
  }
  
  if (!serviceData) {
    return (
      <div className="py-12">
        <div className="container">
          <div className="p-8 text-center">
            <h1 className="mb-4 text-2xl font-bold">Η υπηρεσία δεν βρέθηκε</h1>
            <p className="mb-6">Η υπηρεσία που αναζητάτε δεν είναι διαθέσιμη.</p>
            <Link to="/services" className="btn btn-primary">
              Επιστροφή στις Υπηρεσίες
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
          <Link to="/services" className="text-coffee hover:text-coffee-dark">
            &larr; Οι Υπηρεσίες μας
          </Link>
        </div>
        
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">{serviceData.title}</h1>
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-lg h-80">
          <img 
            src={serviceData.heroImage} 
            alt={serviceData.title} 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="max-w-2xl p-6 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold font-serif">{serviceData.title}</h2>
              <p className="text-lg">{serviceData.description}</p>
            </div>
          </div>
        </div>
        
        {/* Service Details */}
        <div className="grid grid-cols-1 gap-12 mb-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-2xl font-bold font-serif text-coffee">{serviceData.detailsTitle}</h2>
            <div className="space-y-4">
              {serviceData.details.map((detail: string, index: number) => (
                <p key={index}>{detail}</p>
              ))}
            </div>
            
            {serviceData.features && (
              <div className="mt-8">
                <h3 className="mb-4 text-xl font-bold text-coffee">Χαρακτηριστικά</h3>
                <ul className="space-y-2">
                  {serviceData.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {serviceData.images.map((image: string, index: number) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`${serviceData.title} ${index + 1}`} 
                  className="object-cover w-full rounded-lg shadow-md h-52"
                />
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Pricing */}
        {serviceData.pricing && (
          <div className="p-8 mb-12 bg-coffee-light/10 rounded-lg">
            <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Τιμοκατάλογος</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {serviceData.pricing.map((price: any, index: number) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-2 text-xl font-bold text-coffee">{price.name}</h3>
                  <p className="mb-4 text-sm text-gray-600">{price.description}</p>
                  <p className="text-2xl font-bold text-coffee">{price.price}</p>
                  {price.note && <p className="mt-2 text-sm text-gray-500">{price.note}</p>}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* How It Works */}
        {serviceData.process && (
          <div className="mb-12">
            <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Πώς Λειτουργεί</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              {serviceData.process.map((step: any, index: number) => (
                <div key={index} className="p-6 text-center bg-white rounded-lg shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white bg-coffee rounded-full">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA */}
        <div className="p-8 text-center bg-coffee text-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold font-serif">Ενδιαφέρεστε για αυτή την υπηρεσία;</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να σας προσφέρουμε μια εξατομικευμένη λύση.
          </p>
          <Link to="/contact" className="btn bg-cream text-coffee hover:bg-white">
            Επικοινωνήστε Μαζί μας
          </Link>
        </div>
      </div>
    </div>
  )
}

// Sample data
const services = [
  {
    id: 'gift-baskets',
    title: 'Καλάθια Δώρων',
    description: 'Δημιουργούμε μοναδικά καλάθια δώρων για κάθε περίσταση, γεμάτα με εκλεκτά προϊόντα και προσαρμοσμένα στις προτιμήσεις σας.',
    heroImage: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    detailsTitle: 'Μοναδικά Καλάθια Δώρων',
    details: [
      'Στο Melisa, δημιουργούμε καλάθια δώρων που εντυπωσιάζουν και αφήνουν αξέχαστες εντυπώσεις. Κάθε καλάθι είναι προσεκτικά σχεδιασμένο και συσκευασμένο με αγάπη και προσοχή στη λεπτομέρεια.',
      'Είτε ψάχνετε για ένα δώρο γενεθλίων, μια επαγγελματική χειρονομία ή ένα εορταστικό δώρο, έχουμε την τέλεια επιλογή για εσάς. Μπορείτε να επιλέξετε από τα προσχεδιασμένα καλάθια μας ή να δημιουργήσετε ένα εντελώς προσαρμοσμένο καλάθι με τα αγαπημένα σας προϊόντα.'
    ],
    features: [
      'Προσχεδιασμένα καλάθια για κάθε περίσταση',
      'Προσαρμοσμένα καλάθια με τα αγαπημένα σας προϊόντα',
      'Εταιρικά δώρα και ειδικές προσφορές',
      'Εποχιακά καλάθια για γιορτές και ειδικές περιστάσεις',
      'Πολυτελής συσκευασία και παρουσίαση',
      'Δυνατότητα παράδοσης στον χώρο σας'
    ],
    images: [
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1512909006721-3d6018887383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    pricing: [
      {
        name: 'Βασικό Καλάθι',
        description: 'Ιδανικό για μικρά δώρα και ευχαριστήρια',
        price: 'Από 25€',
        note: 'Περιλαμβάνει 4-6 προϊόντα'
      },
      {
        name: 'Deluxe Καλάθι',
        description: 'Τέλειο για γενέθλια και επετείους',
        price: 'Από 45€',
        note: 'Περιλαμβάνει 8-10 προϊόντα'
      },
      {
        name: 'Premium Καλάθι',
        description: 'Η απόλυτη επιλογή για εντυπωσιακά δώρα',
        price: 'Από 75€',
        note: 'Περιλαμβάνει 12-15 προϊόντα και ειδική συσκευασία'
      }
    ],
    process: [
      {
        title: 'Επιλογή',
        description: 'Επιλέξτε ένα προσχεδιασμένο καλάθι ή δημιουργήστε το δικό σας'
      },
      {
        title: 'Προσαρμογή',
        description: 'Προσθέστε προσωπικές πινελιές και ειδικά μηνύματα'
      },
      {
        title: 'Παραγγελία',
        description: 'Ολοκληρώστε την παραγγελία σας online ή στο κατάστημά μας'
      },
      {
        title: 'Παράδοση',
        description: 'Παραλάβετε το καλάθι σας ή επιλέξτε παράδοση στον χώρο σας'
      }
    ]
  },
  {
    id: 'catering',
    title: 'Catering',
    description: 'Προσφέρουμε υπηρεσίες catering για εταιρικές εκδηλώσεις, γάμους και άλλες ειδικές περιστάσεις.',
    heroImage: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    detailsTitle: 'Υπηρεσίες Catering',
    details: [
      'Το Melisa προσφέρει εξαιρετικές υπηρεσίες catering για κάθε είδους εκδήλωση. Από εταιρικές συναντήσεις και συνέδρια μέχρι γάμους και οικογενειακές γιορτές, μπορούμε να καλύψουμε όλες τις ανάγκες σας.',
      'Τα πλατό μας με ξηρούς καρπούς, αποξηραμένα φρούτα, σοκολάτες και άλλα εδέσματα είναι προσεκτικά σχεδιασμένα για να εντυπωσιάσουν τους καλεσμένους σας και να προσφέρουν μια μοναδική γευστική εμπειρία.'
    ],
    features: [
      'Εταιρικές εκδηλώσεις και συναντήσεις',
      'Γάμοι και δεξιώσεις',
      'Πλατό με ξηρούς καρπούς και αποξηραμένα φρούτα',
      'Επιλογές σοκολάτας και γλυκών',
      'Πακέτα σνακ για γραφεία',
      'Προσαρμοσμένα μενού για κάθε περίσταση'
    ],
    images: [
      'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1604945169446-201aaf83ed5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    ],
    pricing: [
      {
        name: 'Μικρές Εκδηλώσεις',
        description: 'Ιδανικό για συναντήσεις έως 20 άτομα',
        price: 'Από 150€',
        note: 'Περιλαμβάνει 3-4 πλατό με ποικιλία προϊόντων'
      },
      {
        name: 'Μεσαίες Εκδηλώσεις',
        description: 'Κατάλληλο για εκδηλώσεις 20-50 ατόμων',
        price: 'Από 350€',
        note: 'Περιλαμβάνει 5-7 πλατό και ειδικές επιλογές'
      },
      {
        name: 'Μεγάλες Εκδηλώσεις',
        description: 'Για γάμους και μεγάλες δεξιώσεις',
        price: 'Από 600€',
        note: 'Προσαρμοσμένο μενού και πλήρης κάλυψη των αναγκών σας'
      }
    ],
    process: [
      {
        title: 'Συζήτηση',
        description: 'Συζητάμε τις ανάγκες και τις προτιμήσεις σας'
      },
      {
        title: 'Πρόταση',
        description: 'Σας παρουσιάζουμε μια προσαρμοσμένη πρόταση'
      },
      {
        title: 'Επιβεβαίωση',
        description: 'Οριστικοποιούμε τις λεπτομέρειες και την παραγγελία'
      },
      {
        title: 'Εκτέλεση',
        description: 'Παραδίδουμε και στήνουμε τα πάντα για την εκδήλωσή σας'
      }
    ]
  }
];

export default ServiceDetails