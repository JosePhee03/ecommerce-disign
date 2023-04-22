import { ProductType } from './Products.models'

export interface ShoppingCart {
  CartProduct: ProductType[],
  amount: number
}