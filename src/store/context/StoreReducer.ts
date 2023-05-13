import { ShoppingCart } from '@/models'

import { AddProductToStore, RemoveProductToStore, StoreActions, TypeStoreActions } from '../models'

function StoreReducer (state: ShoppingCart[], action: StoreActions): ShoppingCart[] {
  switch (action.type) {
  case TypeStoreActions.ADD:
    return AddProductToStore(action.payload, state)
  case TypeStoreActions.REMOVE:
    return RemoveProductToStore(action.payload, state)
  default:
    return state
  }
}

export default StoreReducer