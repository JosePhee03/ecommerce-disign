import { ProductType, ShoppingCart } from '@/models'
import { Dispatch } from 'react'
import { ProductID } from './StoreProduct.models'

export interface StoreContextInterface {
  store: ShoppingCart[]
  dispatch: Dispatch<StoreActions>
}

export enum TypeStoreActions {
  ADD,
  REMOVE
}

export type StoreActions =
  | { type: TypeStoreActions.ADD, payload: ProductType }
  | { type: TypeStoreActions.REMOVE, payload: ProductID }

