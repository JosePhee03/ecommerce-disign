import { ProductType } from './Products.models'

export interface ShoppingCart {
  cartProduct: ProductType,
  amount: number
}