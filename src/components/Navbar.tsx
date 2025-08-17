import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (sectionId: string) => {
    // First navigate to home page if not already there
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`
      return
    }
    
    // If already on home page, scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-md">
      <div className="container flex items-center justify-between py-4">
        <NavLink to="/" className="flex items-center">
          <img src="https://i.imgur.com/aQC6fpk.png" alt="melisa Logo" className="h-16" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Αρχική
          </button>
          
          <button 
            onClick={() => scrollToSection('about')}
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Σχετικά
          </button>
          
          <button 
            onClick={() => scrollToSection('products')}
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Προϊόντα
          </button>
          
          <NavLink 
            to="/services" 
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Υπηρεσίες
          </NavLink>
          
          <NavLink 
            to="/ideas" 
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Ιδέες
          </NavLink>
          
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 text-coffee-dark hover:text-coffee transition-colors rounded-md hover:bg-coffee-light/10"
          >
            Επικοινωνία
          </button>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="container pb-4 md:hidden bg-cream border-t border-coffee-light/20">
          <div className="flex flex-col space-y-2 pt-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors text-left" 
            >
              Αρχική
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors text-left" 
            >
              Σχετικά
            </button>
            
            <button 
              onClick={() => scrollToSection('products')}
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors text-left" 
            >
              Προϊόντα
            </button>
            
            <NavLink 
              to="/services" 
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors" 
              onClick={toggleMenu}
            >
              Υπηρεσίες
            </NavLink>
            
            <NavLink 
              to="/ideas" 
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors" 
              onClick={toggleMenu}
            >
              Ιδέες
            </NavLink>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-3 text-coffee-dark hover:text-coffee hover:bg-coffee-light/10 rounded-md transition-colors text-left" 
            >
              Επικοινωνία
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar