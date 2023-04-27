import { ProductType } from '@/models'

export const EXPECTED_PRODUCT: ProductType[] = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/2.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
      'https://i.dummyjson.com/data/products/1/thumbnail.jpg'
    ]
  }
]

export const UNEXPECTED_PRODUCT = [
  {
    ID: 1,
    name: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 'number',
    discountPercentage: '000',
    rating: '000',
    stock: '00',
    brand: 1223,
    Thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
  },
]