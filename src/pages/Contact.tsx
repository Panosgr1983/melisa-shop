import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'
import { usePageTitle } from '../hooks/usePageTitle'

const Contact = () => {
  usePageTitle('Επικοινωνία')
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Επικοινωνία</h1>
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-2xl font-bold font-serif text-coffee">Ελάτε σε Επαφή</h2>
            <p className="mb-8">
              Θα χαρούμε να ακούσουμε από εσάς! Επικοινωνήστε μαζί μας για οποιαδήποτε ερώτηση ή παρατήρηση.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-2 mr-4 bg-coffee-light/30 rounded-full">
                  <FiMapPin className="text-coffee" size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Επισκεφθείτε μας</h3>
                  <p className="text-gray-600">Αγίας Ζώνης 1</p>
                  <p className="text-gray-600">Κυψέλη, Αθήνα</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 bg-coffee-light/30 rounded-full">
                  <FiPhone className="text-coffee" size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Καλέστε μας</h3>
                  <p className="text-gray-600">211 407 3640</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 bg-coffee-light/30 rounded-full">
                  <FiMail className="text-coffee" size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Email</h3>
                  <p className="text-gray-600">evgeniinuts@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 mr-4 bg-coffee-light/30 rounded-full">
                  <FiClock className="text-coffee" size={20} />
                </div>
                <div>
                  <h3 className="mb-1 font-bold">Ωράριο</h3>
                  <p className="text-gray-600">Δευτέρα - Παρασκευή: 8πμ - 9μμ</p>
                  <p className="text-gray-600">Σάββατο: 8πμ - 8μμ</p>
                  <p className="text-gray-600">Κυριακή: Κλειστά</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold text-center font-serif text-coffee">Βρείτε μας</h2>
          <div className="overflow-hidden rounded-lg shadow-md h-64">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.2123801949656!2d23.71580731531837!3d37.94294797972721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f9bffcf01%3A0x3e0dce8e58812705!2sLeof.%20Eleftheriou%20Venizelou%2045%2C%20Nea%20Smirni%20171%2021!5e0!3m2!1sen!2sgr!4v1651234567890!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Melisa Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
