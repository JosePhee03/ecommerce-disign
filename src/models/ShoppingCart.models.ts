import { Product } from './Products.models'

export interface Cart {
  cartProduct: Product,
  amount: number
}