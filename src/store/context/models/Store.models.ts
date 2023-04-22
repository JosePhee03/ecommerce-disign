import { ShoppingCart } from '@/models'
import { Dispatch } from 'react'

export interface StoreContextInterface {
  store: ShoppingCart[]
  dispatch: Dispatch<StoreActions>
}

export enum TypeStoreActions {
  ADD,
  REMOVE
}

export type StoreActions =
  | { type: TypeStoreActions.ADD, payload: unknown }
  | { type: TypeStoreActions.REMOVE, payload: unknown }

