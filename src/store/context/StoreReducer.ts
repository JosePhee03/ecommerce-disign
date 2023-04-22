import { ShoppingCart } from '@/models'
import { StoreActions, TypeStoreActions,  } from './models/Store.models'
import { AddProductToStore } from './models'

function StoreReducer (state: ShoppingCart[], action: StoreActions ): ShoppingCart[] {
  switch (action.type) {
  case TypeStoreActions.ADD:
    console.log(state)
    return AddProductToStore(action.payload, state)
  default:
    return state
  }
}

export default StoreReducer