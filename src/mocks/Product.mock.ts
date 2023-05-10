import { ProductType } from '@/models'

export const PRODUCT_MOCK: ProductType = {
  id: 1,
  title: 'iPhone 9',
  description: 'An apple mobile which is nothing like apple',
  price: 549,
  rating: 4.69,
  stock: 94,
  brand: 'Apple',
  category: 'smartphones',
  images: [
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    'https://i.dummyjson.com/data/products/1/1.jpg',
    'https://i.dummyjson.com/data/products/1/2.jpg',
    'https://i.dummyjson.com/data/products/1/3.jpg',
    'https://i.dummyjson.com/data/products/1/4.jpg',
    'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
  ]
}