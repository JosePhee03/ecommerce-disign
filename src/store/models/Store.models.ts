import { ProductType, ShoppingCart } from '@/models'
import { Dispatch } from 'react'

export interface StoreContextInterface {
  store: ShoppingCart[]
  dispatch: Dispatch<StoreActions>
}

export enum TypeStoreActions {
  ADD,
  REMOVE
}

export type StoreReducerAdd = (product: ProductType, store: ShoppingCart[]) => ShoppingCart[]
export type StoreReducerRemove = (id: number, store: ShoppingCart[]) => ShoppingCart[]

export type StoreActions =
  | { type: TypeStoreActions.ADD, payload: ProductType }
  | { type: TypeStoreActions.REMOVE, payload: number }
