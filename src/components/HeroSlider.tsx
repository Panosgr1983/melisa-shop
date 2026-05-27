import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ProductImage from './ProductImage'

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754335684/xiroi-karpoi_h2mp8k.webp',
      title: 'Ξηροί Καρποί',
      subtitle: 'Superfoods για υγιεινό σνακ',
      description: 'Ανακαλύψτε τη δύναμη των ξηρών καρπών - φυσικές πηγές ενέργειας και θρεπτικών συστατικών'
    },
    {
      id: 2,
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754337081/dried-fruits_w768eb.jpg',
      title: 'Αποξηραμένα Φρούτα',
      subtitle: 'Φυσική γλυκύτητα',
      description: 'Βερίκοκα, δαμάσκηνα, χουρμάδες και πολλά άλλα - η φύση στην πιο γλυκιά της μορφή'
    },
    {
      id: 3,
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1754336208/_TSO9666_bswegm_c_pad_b_gen_fill_ar_16_9_zyhvwi.jpg',
      title: 'Σοκολατάκια',
      subtitle: 'Χειροποίητες απολαύσεις',
      description: 'Εκλεκτές σοκολάτες και γλυκές δημιουργίες για κάθε στιγμή'
    },
    {
      id: 4,
      image: 'https://res.cloudinary.com/duvtwanvc/image/upload/f_auto,q_auto:eco,dpr_auto/v1751193284/_TSO9759_nlyfxv.jpg',
      title: 'Καφές',
      subtitle: 'Αρώματα και γεύσεις',
      description: 'Από τον κλασικό ελληνικό μέχρι τα σύγχρονα espresso - κάθε φλιτζάνι μια εμπειρία'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Smooth-scroll to an element by id, compensating for sticky header height
  const scrollToWithOffset = (id: string, extraOffset: number = 0) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Try to detect a sticky/fixed header to subtract its height
    const header =
      (document.querySelector('header.sticky, header.fixed') as HTMLElement | null) ||
      (document.querySelector('header') as HTMLElement | null);

    const headerHeight = header?.offsetHeight ?? 0;

    const y =
      el.getBoundingClientRect().top + window.scrollY - headerHeight - extraOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <ProductImage 
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <div className="container text-center text-white px-4">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-8"
          >
            <img src="https://i.imgur.com/aQC6fpk.png" alt="melisa Logo" className="w-40 mx-auto filter brightness-0 invert mb-8" />
          </motion.div>
          
          <motion.h1 
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4 text-5xl font-bold font-serif md:text-6xl"
          >
            {slides[currentSlide].title}
          </motion.h1>
          
          <motion.h2 
            key={`subtitle-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-6 text-2xl font-medium text-coffee-light"
          >
            {slides[currentSlide].subtitle}
          </motion.h2>
          
          <motion.p 
            key={`description-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="max-w-2xl mx-auto mb-8 text-xl"
          >
            {slides[currentSlide].description}
          </motion.p>
          
          <motion.div
            key={`button-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <button 
              onClick={() => scrollToWithOffset('products', 8)}
              className="inline-block px-8 py-4 font-medium text-white bg-coffee hover:bg-coffee-dark rounded-md transition-colors"
            >
              Ανακαλύψτε τα Προϊόντα μας
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <FiChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 p-3 bg-black/30 hover:bg-black/50 text-white rounded-full transition-colors"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSlider