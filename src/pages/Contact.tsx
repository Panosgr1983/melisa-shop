import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }
  
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
          
          {/* Contact Form */}
          {/*
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-6 text-2xl font-bold font-serif text-coffee">Στείλτε μας Μήνυμα</h2>
              
              {isSubmitted ? (
                <div className="p-4 mb-6 text-green-700 bg-green-100 rounded-md">
                  <p>Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.</p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                    Όνομα
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                    Θέμα
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-coffee focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white bg-coffee rounded-md hover:bg-coffee-dark focus:outline-none focus:ring-2 focus:ring-coffee focus:ring-offset-2"
                >
                  Αποστολή Μηνύματος
                </button>
              </form>
            </div>
          </motion.div>
          */}
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