import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home.tsx'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductCategory from './pages/ProductCategory'
import ProductDetails from './pages/ProductDetails'
import Services from './pages/Services'
import ServiceDetails from './pages/ServiceDetails'
import Shop from './pages/Shop'
import Ideas from './pages/Ideas'
import IdeasPost from './pages/IdeasPost'
import LegalPage from './pages/LegalPage'
import LoyaltyProgram from './pages/LoyaltyProgram'
import NotFound from './pages/NotFound'
import { SpeedInsights } from "@vercel/speed-insights/react"
import ScrollToHash from './components/ScrollToHash'
import ScrollToTop from './components/ScrollToTop'
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/product/:slug" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<ServiceDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:slug" element={<IdeasPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal/:page" element={<LegalPage />} />
          <Route path="/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToHash />
      <SpeedInsights />
    </div>
  )
}

export default App