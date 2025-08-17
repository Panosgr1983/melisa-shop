import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import { categories, getFeaturedProducts, getProductsByCategory } from '../data'

const Home = () => {
  // Δυναμικές επιλεγμένες κατηγορίες με εικόνες
  const featuredCategories = [
    { 
      slug: 'nuts', 
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/v1751193327/_TSO3646_n3vcei.jpg',
      title: 'Ξηροί Καρποί',
      description: 'Macadamia, καρυδόψιχα, pistachio και πολλά άλλα superfoods!'
    },
    { 
      slug: 'dried-fruits', 
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/v1751193520/_TSO9924_z44ad2.jpg',
      title: 'Αποξηραμένα Φρούτα',
      description: 'Βερίκοκα, δαμάσκηνα, χουρμάδες και γεμιστά χουρμάδες.'
    },
    { 
      slug: 'sweets', 
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/v1751193259/_TSO9638_eq1g8t.jpg',
      title: 'Γλυκά',
      description: 'Χειροποίητες δημιουργίες από εκλεκτά υλικά.'
    },
    { 
      slug: 'coffee', 
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/v1754338244/_TSO9807_no9lni_e_gen_restore_c_pad_b_gen_fill_ar_1_1_zkousg.jpg',
      title: 'Καφές',
      description: 'Από τον κλασικό ελληνικό μέχρι τα σύγχρονα espresso.'
    },
    { 
      slug: 'juices', 
      image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      title: 'Χυμοί & Smoothies',
      description: 'Φρέσκοι χυμοί και smoothies από επιλεγμένα φρούτα.'
    }
  ]

  // Βρίσκουμε τα δεδομένα κατηγοριών από το data system
  const featuredCategoriesWithData = featuredCategories.map(featuredCat => {
    const categoryData = categories.find(cat => cat.slug === featuredCat.slug)
    const productCount = getProductsByCategory(featuredCat.slug).length
    return {
      ...featuredCat,
      name: categoryData?.name || featuredCat.title,
      productCount,
      linkTo: `/products/${featuredCat.slug}`
    }
  })
  
  return (
    <div>
      {/* Hero Slider */}
      <div id="home">
        <HeroSlider />
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-coffee-light/5">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="mb-6 text-3xl font-bold font-serif text-coffee">Η Φιλοσοφία μας</h2>
            <p className="mb-6 text-lg">
              Στο melisa, οι ξηροί καρποί δεν είναι απλώς σνακ - είναι superfoods που προσφέρουν ωφέλη για την υγεία σας. 
              Κάθε προϊόν μας είναι προσεκτικά επιλεγμένο για να σας προσφέρει ένα πολυτελές, ημερήσιο υγιεινό σνακ.
            </p>
            <p className="text-lg">
              Η προτεραιότητά μας είναι η φρεσκάδα και η ποιότητα σε κάθε μπουκιά.
            </p>
          </div>

          <div className="relative py-24 mb-16 parallax" style={{backgroundImage: "url('https://res.cloudinary.com/duvtwanvc/image/upload/v1751193354/_TSO8842_i9lizk.jpg')"}}>
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="container relative">
              <div className="max-w-2xl mx-auto text-center text-white">
                <h3 className="text-3xl font-bold font-serif mb-6">Ποιοι Είμαστε</h3>
                <p className="mb-4 text-lg">
                  Το melisa ξεκίνησε το 2015 με ένα όραμα: να προσφέρουμε στους πελάτες μας τα καλύτερα προϊόντα, συνδυάζοντας την παράδοση με τη σύγχρονη αισθητική και ποιότητα.
                </p>
                <p className="mb-4 text-lg">
                  Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες με πάθος για την ποιότητα και την εξυπηρέτηση. Κάθε μέλος της ομάδας μας είναι αφοσιωμένο στο να προσφέρει την καλύτερη δυνατή εμπειρία στους πελάτες μας.
                </p>
                <p className="text-lg">
                  Επιλέγουμε προσεκτικά τους προμηθευτές μας και συνεργαζόμαστε μόνο με τους καλύτερους παραγωγούς, διασφαλίζοντας ότι κάθε προϊόν που προσφέρουμε πληροί τα υψηλότερα πρότυπα ποιότητας.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-coffee-light/20 rounded-lg p-12">
            <h3 className="text-2xl font-bold font-serif text-coffee text-center mb-12">Οι Αξίες μας</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-coffee text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Ποιότητα</h4>
                <p>Επιλέγουμε και προσφέρουμε μόνο τα καλύτερα προϊόντα, χωρίς συμβιβασμούς στην ποιότητα.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-coffee text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-2">Εξυπηρέτηση Πελατών</h4>
                <p>Η άριστη εξυπηρέτηση των πελατών μας είναι στο επίκεντρο κάθε μας δραστηριότητας.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section id="products" className="py-16 categories-section">
        <div className="container">
          <h2 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Επιλεγμένες Κατηγορίες</h2>
          <p className="text-center mb-12 text-lg">Ανακαλύψτε νέες αλλά και αγαπημένες γευστικές απολαύσεις!</p>
          
          <div className="text-center mb-8">
            <Link
              to="/products"
              className="inline-block px-6 py-3 bg-coffee text-white rounded-full font-semibold shadow-md hover:bg-coffee-dark transition duration-300"
            >
              Δείτε τον κατάλογο μας
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-5">
            {featuredCategoriesWithData.map((category, index) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={category.image}
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Link 
                    to={category.linkTo}
                    className="text-coffee hover:text-coffee-dark"
                  >
                    Δείτε περισσότερα →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-coffee text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="container text-center relative z-10" style={{background: 'rgba(139, 69, 19, 0.9)', padding: '3rem', borderRadius: '1rem'}}>
          <h2 className="mb-6 text-3xl font-bold font-serif">Επισκεφθείτε μας</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Ελάτε στο κατάστημά μας και ανακαλύψτε την ποιότητα των προϊόντων μας.
          </p>
          <div className="space-y-4 mb-8">
            <p>Αγίας Ζώνης 1</p>
            <p>Κυψέλη, Αθήνα</p>
            <p>211 407 3640</p>
            <p>info@melisanuts.gr</p>
          </div>
          
          {/* Map */}
          <div className="mt-8">
            <div className="overflow-hidden rounded-lg shadow-md h-64 max-w-2xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.2123801949656!2d23.71580731531837!3d37.94294797972721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f9bffcf01%3A0x3e0dce8e58812705!2sLeof.%20Eleftheriou%20Venizelou%2045%2C%20Nea%20Smirni%20171%2021!5e0!3m2!1sen!2sgr!4v1651234567890!5m2!1sen!2sgr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="melisa Cafe Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home