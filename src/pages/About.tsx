import { motion } from 'framer-motion'
import ProductImage from '../components/ProductImage'

const About = () => {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Σχετικά με εμάς</h1>
        
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-2xl font-bold font-serif text-coffee">Η Ιστορία μας</h2>
              <p className="mb-4">
                Το MELISA ξεκίνησε το 2015 με ένα όραμα: να προσφέρουμε στους πελάτες μας τα καλύτερα προϊόντα, συνδυάζοντας την παράδοση με τη σύγχρονη αισθητική και ποιότητα.
              </p>
              <p className="mb-4">
                Η ομάδα μας αποτελείται από έμπειρους επαγγελματίες με πάθος για την ποιότητα και την εξυπηρέτηση. Κάθε μέλος της ομάδας μας είναι αφοσιωμένο στο να προσφέρει την καλύτερη δυνατή εμπειρία στους πελάτες μας.
              </p>
              <p>
                Επιλέγουμε προσεκτικά τους προμηθευτές μας και συνεργαζόμαστε μόνο με τους καλύτερους παραγωγούς, διασφαλίζοντας ότι κάθε προϊόν που προσφέρουμε πληροί τα υψηλότερα πρότυπα ποιότητας.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProductImage 
                src="https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1751193354/_TSO8842_i9lizk.jpg" 
                alt="Melisa shop interior" 
                className="w-full h-full rounded-lg shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 mb-20 bg-coffee-light/20 rounded-lg">
          <div className="container">
            <h2 className="mb-12 text-2xl font-bold text-center font-serif text-coffee">Οι Αξίες μας</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="p-6 text-center bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold text-coffee">Ποιότητα</h3>
                <p>
                  Επιλέγουμε και προσφέρουμε μόνο τα καλύτερα προϊόντα, χωρίς συμβιβασμούς στην ποιότητα.
                </p>
              </div>
              <div className="p-6 text-center bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold text-coffee">Κοινότητα</h3>
                <p>
                  Είμαστε περήφανοι που υποστηρίζουμε την τοπική κοινότητα και δημιουργούμε σχέσεις με τους πελάτες μας.
                </p>
              </div>
              <div className="p-6 text-center bg-white rounded-lg shadow-md">
                <h3 className="mb-4 text-xl font-bold text-coffee">Βιωσιμότητα</h3>
                <p>
                  Δεσμευόμαστε για περιβαλλοντικά υπεύθυνες πρακτικές και βιώσιμες επιλογές προϊόντων.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-20">
          <h2 className="mb-12 text-2xl font-bold text-center font-serif text-coffee">Η Ομάδα μας</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="object-cover w-48 h-48 mx-auto mb-4 rounded-full"
                />
                <h3 className="mb-1 text-lg font-bold">{member.name}</h3>
                <p className="mb-2 text-coffee">{member.role}</p>
                <p className="text-sm text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Our Coffee */}
        <section>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold font-serif text-coffee">Ο Καφές μας</h2>
              <p className="mb-4">
                Στο MELISA, ο καφές δεν είναι απλώς ένα ρόφημα - είναι μια εμπειρία. Επιλέγουμε προσεκτικά τους καλύτερους κόκκους από όλο τον κόσμο και τους ψήνουμε με μαεστρία για να αναδείξουμε τα μοναδικά τους χαρακτηριστικά.
              </p>
              <p className="mb-4">
                Κάθε φλιτζάνι καφέ που σερβίρουμε είναι αποτέλεσμα χρόνων εμπειρίας και πάθους για την τελειότητα. Από τον κλασικό ελληνικό καφέ μέχρι τα σύγχρονα espresso-based ροφήματα, κάθε επιλογή είναι προσεκτικά επιμελημένη.
              </p>
              <p className="mb-6">
                Οι baristas μας είναι εκπαιδευμένοι στις πιο σύγχρονες τεχνικές και χρησιμοποιούν επαγγελματικό εξοπλισμό για να διασφαλίσουν ότι κάθε φλιτζάνι είναι τέλειο.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  Επιλεγμένοι κόκκοι από τις καλύτερες φυτείες
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  Φρέσκο ψήσιμο για μέγιστη γεύση
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  Επαγγελματικός εξοπλισμός και τεχνικές
                </li>
                <li className="flex items-center">
                  <span className="inline-block w-2 h-2 mr-2 bg-coffee rounded-full"></span>
                  Εκπαιδευμένοι baristas με πάθος για την τελειότητα
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee beans" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee shop" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Coffee brewing" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Latte art" 
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

// Sample data
const teamMembers = [
  {
    name: "Μαρία Κωνσταντίνου",
    role: "Ιδιοκτήτρια & Barista",
    bio: "Λάτρης του καφέ με πάνω από 15 χρόνια εμπειρίας και πολλαπλούς τίτλους σε διαγωνισμούς barista.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80"
  },
  {
    name: "Γιώργος Παπαδόπουλος",
    role: "Συνιδιοκτήτης & Roaster",
    bio: "Παθιασμένος με την αναζήτηση των καλύτερων κόκκων και την ανάπτυξη μοναδικών προφίλ ψησίματος.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  },
  {
    name: "Ελένη Αντωνίου",
    role: "Ζαχαροπλάστης",
    bio: "Απόφοιτος σχολής μαγειρικής με ειδίκευση στα γλυκά που συνδυάζονται τέλεια με τον καφέ μας.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1061&q=80"
  },
  {
    name: "Νίκος Δημητρίου",
    role: "Διευθυντής",
    bio: "Δημιουργεί μια φιλόξενη ατμόσφαιρα και διασφαλίζει ότι κάθε πελάτης φεύγει με ένα χαμόγελο.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
  }
]

export default About