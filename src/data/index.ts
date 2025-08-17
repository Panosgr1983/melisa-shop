// Import all product data
import { sweets } from './products/sweets'
import { coffees } from './products/coffee'
import { honey } from './products/honey'
import { juices } from './products/juices'
import { nuts } from './products/nuts'
import { teas } from './products/teas'
import { wines } from './products/wines'
import { driedFruits } from './products/dried-fruits'
import { seeds } from './products/seeds'
import { energyBars } from './products/energy-bars'
import { butters } from './products/butters'
import { breakfastMixes } from './products/breakfast-mixes'
import { categories, subcategories } from './categories'

// Combine all products
export const allProducts = [
  ...sweets,
  ...coffees,
  ...honey,
  ...juices,
  ...nuts,
  ...teas,
  ...wines,
  ...driedFruits,
  ...seeds,
  ...energyBars,
  ...butters,
  ...breakfastMixes,
]

// Export individual product arrays
export {
  sweets,
  coffees,
  honey,
  juices,
  nuts,
  teas,
  wines,
  driedFruits,
  seeds,
  energyBars,
  butters,
  breakfastMixes,
  categories,
  subcategories
}

// Helper functions
export const getProductsByCategory = (categorySlug: string) => {
  return allProducts.filter(product => product.categorySlug === categorySlug)
}

export const getProductBySlug = (slug: string) => {
  return allProducts.find(product => product.slug === slug)
}

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug)
}

export const getFeaturedProducts = (limit: number = 8) => {
  return allProducts.slice(0, limit)
}

export const getRandomProducts = (limit: number = 4) => {
  const shuffled = [...allProducts].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, limit)
}

//export const getProductsBySubcategory = (subcategorySlug: string) => {
  //return allProducts.filter(product => product.subcategorySlug === subcategorySlug)
//}

export const getCategoryProductCount = (categorySlug: string) => {
  return getProductsByCategory(categorySlug).length
}