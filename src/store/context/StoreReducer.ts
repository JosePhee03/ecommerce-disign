import { ShoppingCart } from '../../models/ShoppingCart'
import { ActionsType } from './models/Store.models'

function StoreReducer (state: ShoppingCart[], action: ActionsType ) {
  switch (action.type) {
  default:
    return state
  }
}

export default StoreReducer