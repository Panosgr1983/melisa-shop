export interface Product {
  title: string
  slug: string
  description: string
  categorySlug: string
  image: string
  subcategorySlug?: string
  quantity?: string
  price?: number
}

export interface Category {
  name: string
  slug: string
}

export interface Subcategory {
  name: string
  slug: string
  categorySlug: string
}
