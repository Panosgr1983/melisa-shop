import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="py-8 bg-coffee text-cream">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <img src="https://i.imgur.com/aQC6fpk.png" alt="melisa Logo" className="h-16 filter brightness-0 invert" />
            </div>
            <p className="mb-4">Η τοπική σας επιχείρηση για εκλεκτούς ξηρούς καρπούς, καφέ και χυμούς στην Κυψέλη.</p>
            <div className="flex mt-4 space-x-4">
              <a href="https://www.facebook.com/p/Melisa-100082371217033/" target="_blank" rel="noopener noreferrer" className="hover:text-coffee-light transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-coffee-light transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-coffee-light transition-colors">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold font-serif">Ωράριο</h3>
            <p>Δευτέρα - Σάββατο: 7:00 - 21:00</p>
            <p>Κυριακή: 9:00 - 20:00</p>
          </div>
          
          <div>
            <h3 className="mb-4 text-xl font-bold font-serif">Επικοινωνία</h3>
            <p>Αγίας Ζώνης 1</p>
            <p>Κυψέλη, Αθήνα</p>
            <p>211 407 3640</p>
            <p>info@melisanuts.gr</p>
            <p className="mt-2 text-coffee-light">melisanuts.gr</p>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-center border-t border-coffee-light">
          <p>&copy; 2024 melisa. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer