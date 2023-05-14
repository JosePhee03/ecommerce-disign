import { ShoppingCart } from '@/models'

export const CART_MOCK: ShoppingCart[] = [
  {
    'cartProduct': {
      'id': 4,
      'title': 'OPPOF19',
      'description': 'OPPO F19 is officially announced on April 2021.',
      'price': 280,
      'brand': 'OPPO',
      'category': 'smartphones',
      'rating': 4.3,
      'stock': 123,
      'images': [
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/4/1.jpg',
        'https://i.dummyjson.com/data/products/4/2.jpg',
        'https://i.dummyjson.com/data/products/4/3.jpg',
        'https://i.dummyjson.com/data/products/4/4.jpg',
        'https://i.dummyjson.com/data/products/4/thumbnail.jpg'
      ]
    },
    'amount': 6
  },
  {
    'cartProduct': {
      'id': 3,
      'title': 'Samsung Universe 9',
      'description': 'Samsung\'s new variant which goes beyond Galaxy to the Universe',
      'price': 1249,
      'brand': 'Samsung',
      'category': 'smartphones',
      'rating': 4.09,
      'stock': 36,
      'images': [
        'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/3/1.jpg'
      ]
    },
    'amount': 8
  },
  {
    'cartProduct': {
      'id': 2,
      'title': 'iPhone X',
      'description': 'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      'price': 899,
      'brand': 'Apple',
      'category': 'smartphones',
      'rating': 4.44,
      'stock': 34,
      'images': [
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
        'https://i.dummyjson.com/data/products/2/1.jpg',
        'https://i.dummyjson.com/data/products/2/2.jpg',
        'https://i.dummyjson.com/data/products/2/3.jpg',
        'https://i.dummyjson.com/data/products/2/thumbnail.jpg'
      ]
    },
    'amount': 9
  }
]