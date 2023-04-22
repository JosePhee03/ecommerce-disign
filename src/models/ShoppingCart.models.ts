import { ProductType } from './Products.models'

export interface ShoppingCart {
  cartProducts: ProductType,
  amount: number
}