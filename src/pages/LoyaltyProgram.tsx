import { motion } from 'framer-motion'

const LoyaltyProgram = () => {
  
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="mb-12 text-4xl font-bold text-center font-serif text-coffee">Πρόγραμμα Επιβράβευσης</h1>
        
        {/* Hero Section */}
        <div className="relative mb-12 overflow-hidden rounded-lg h-80">
          <img 
            src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1989&q=80" 
            alt="Loyalty Program" 
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <div className="max-w-2xl p-6 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold font-serif">Πρόγραμμα Επιβράβευσης</h2>
              <p className="text-lg">Κερδίστε πόντους με κάθε αγορά και απολαύστε αποκλειστικά προνόμια και εκπτώσεις.</p>
              <button className="px-6 py-2 mt-6 text-coffee bg-cream rounded-md hover:bg-white">
                Εγγραφή Τώρα
              </button>
            </div>
          </div>
        </div>
        
        {/* How It Works */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Πώς Λειτουργεί</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {loyaltySteps.map((step, index) => (
              <motion.div
                key={index}
                className="p-6 text-center bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 text-white bg-coffee rounded-full">
                  {index + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 mb-16 bg-coffee-light/10 rounded-lg">
          <div className="container">
            <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Προνόμια Μελών</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {loyaltyBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-white bg-coffee rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-center">{benefit.title}</h3>
                  <p className="text-center text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Tiers */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Επίπεδα Μελών</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {loyaltyTiers.map((tier, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-lg shadow-md ${
                  tier.highlighted 
                    ? 'bg-coffee text-white' 
                    : 'bg-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="mb-2 text-xl font-bold text-center">{tier.name}</h3>
                <p className="mb-4 text-center">{tier.points} πόντοι</p>
                <ul className="mb-6 space-y-2">
                  {tier.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-start">
                      <span className={`inline-block w-2 h-2 mt-1.5 mr-2 rounded-full ${
                        tier.highlighted ? 'bg-white' : 'bg-coffee'
                      }`}></span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                {tier.highlighted && (
                  <div className="text-center">
                    <span className="px-3 py-1 text-xs bg-white text-coffee rounded-full">
                      Προτεινόμενο
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* FAQ */}
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-bold text-center font-serif text-coffee">Συχνές Ερωτήσεις</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {loyaltyFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <h3 className="mb-2 text-lg font-bold text-coffee">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* CTA */}
        <section className="p-8 text-center bg-coffee text-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold font-serif">Έτοιμοι να Ξεκινήσετε;</h2>
          <p className="max-w-2xl mx-auto mb-6">
            Εγγραφείτε σήμερα στο πρόγραμμα επιβράβευσης και αρχίστε να κερδίζετε πόντους με κάθε αγορά σας.
          </p>
          <button className="px-6 py-2 text-coffee bg-cream rounded-md hover:bg-white">
            Εγγραφή Τώρα
          </button>
        </section>
      </div>
    </div>
  )
}

// Sample data
const loyaltySteps = [
  {
    title: "Εγγραφή",
    description: "Συμπληρώστε τη φόρμα εγγραφής στο κατάστημα ή online."
  },
  {
    title: "Συλλογή Πόντων",
    description: "Κερδίστε 1 πόντο για κάθε 1€ που ξοδεύετε στο κατάστημά μας."
  },
  {
    title: "Ανέβειτε Επίπεδο",
    description: "Όσο περισσότερους πόντους συλλέγετε, τόσο υψηλότερο επίπεδο κατακτάτε."
  },
  {
    title: "Απολαύστε Προνόμια",
    description: "Εξαργυρώστε τους πόντους σας για εκπτώσεις, δώρα και ειδικές προσφορές."
  }
];

const loyaltyBenefits = [
  {
    icon: "🎁",
    title: "Εκπτώσεις & Δώρα",
    description: "Κερδίστε εκπτώσεις και δωρεάν προϊόντα με την εξαργύρωση των πόντων σας."
  },
  {
    icon: "🔔",
    title: "Αποκλειστικές Προσφορές",
    description: "Λάβετε πρώτοι ενημερώσεις για νέα προϊόντα και αποκλειστικές προσφορές."
  },
  {
    icon: "🎂",
    title: "Δώρο Γενεθλίων",
    description: "Λάβετε ένα ειδικό δώρο κατά τη διάρκεια του μήνα των γενεθλίων σας."
  }
];

const loyaltyTiers = [
  {
    name: "Χάλκινο Μέλος",
    points: "0-100",
    benefits: [
      "1 πόντος για κάθε 1€ αγορών",
      "Πρόσβαση σε μηνιαίες προσφορές",
      "Δώρο γενεθλίων"
    ],
    highlighted: false
  },
  {
    name: "Ασημένιο Μέλος",
    points: "101-300",
    benefits: [
      "1.5 πόντοι για κάθε 1€ αγορών",
      "Όλα τα προνόμια του Χάλκινου επιπέδου",
      "10% έκπτωση σε επιλεγμένα προϊόντα",
      "Δωρεάν αποστολή για online παραγγελίες"
    ],
    highlighted: true
  },
  {
    name: "Χρυσό Μέλος",
    points: "301+",
    benefits: [
      "2 πόντοι για κάθε 1€ αγορών",
      "Όλα τα προνόμια του Ασημένιου επιπέδου",
      "15% έκπτωση σε επιλεγμένα προϊόντα",
      "Πρόσκληση σε VIP εκδηλώσεις",
      "Προτεραιότητα σε νέα προϊόντα"
    ],
    highlighted: false
  }
];

const loyaltyFAQs = [
  {
    question: "Πώς μπορώ να εγγραφώ στο πρόγραμμα επιβράβευσης;",
    answer: "Μπορείτε να εγγραφείτε συμπληρώνοντας μια φόρμα στο κατάστημά μας ή online μέσω της ιστοσελίδας μας. Η εγγραφή είναι δωρεάν και παίρνει μόνο λίγα λεπτά."
  },
  {
    question: "Πώς συλλέγω πόντους;",
    answer: "Κερδίζετε πόντους με κάθε αγορά που κάνετε στο κατάστημά μας ή online. Απλά δείξτε την κάρτα σας ή συνδεθείτε στο λογαριασμό σας κατά την αγορά."
  },
  {
    question: "Πότε λήγουν οι πόντοι μου;",
    answer: "Οι πόντοι ισχύουν για 12 μήνες από την ημερομηνία που τους κερδίσατε. Μετά από αυτό το διάστημα, θα λήξουν αυτόματα."
  },
  {
    question: "Πώς μπορώ να ελέγξω το υπόλοιπο των πόντων μου;",
    answer: "Μπορείτε να ελέγξετε το υπόλοιπο των πόντων σας συνδεόμενοι στο λογαριασμό σας στην ιστοσελίδα μας, μέσω της εφαρμογής μας ή ρωτώντας έναν υπάλληλο στο κατάστημα."
  },
  {
    question: "Μπορώ να μεταφέρω τους πόντους μου σε άλλο μέλος;",
    answer: "Δυστυχώς, οι πόντοι δεν μπορούν να μεταφερθούν μεταξύ λογαριασμών. Οι πόντοι είναι προσωπικοί και μπορούν να εξαργυρωθούν μόνο από το μέλος που τους κέρδισε."
  }
];

export default LoyaltyProgram