import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const Menu = () => {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('coffee')

  return (
    <div className="py-12">
      <div className="container">
        <h1 className="section-title">{t('menu.title')}</h1>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 space-x-2 md:space-x-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 mb-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-coffee text-white'
                  : 'bg-coffee-light/20 text-coffee hover:bg-coffee-light/40'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {t(`menu.categories.${category.id}`)}
            </button>
          ))}
        </div>
        
        {/* Menu Items */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item, index) => (
              <motion.div
                key={item.id}
                className="flex p-4 bg-white rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-24 h-24 mr-4 rounded-md"
                />
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <span className="font-bold text-coffee">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  {item.tags && (
                    <div className="flex mt-2 space-x-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-coffee-light/20 text-coffee rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}

// Sample data
const categories = [
  { id: 'coffee', name: 'Coffee' },
  { id: 'tea', name: 'Tea' },
  { id: 'pastries', name: 'Pastries' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'lunch', name: 'Lunch' }
]

const menuItems = [
  {
    id: 1,
    name: 'Espresso',
    description: 'A concentrated shot of coffee with a rich flavor and crema on top.',
    price: 2.75,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Hot']
  },
  {
    id: 2,
    name: 'Americano',
    description: 'Espresso diluted with hot water, similar strength to drip coffee but different flavor.',
    price: 3.25,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    tags: ['Hot', 'Iced']
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'Equal parts espresso, steamed milk, and milk foam for a perfect balance.',
    price: 4.00,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8'
  }
]

export default Menu