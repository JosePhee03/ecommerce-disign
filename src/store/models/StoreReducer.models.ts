import { CartReducerAdd, CartReducerRemove } from './Store.models'

const AddProductToStore: CartReducerAdd = (product, store) => {
  const newProduct = {
    cartProduct: product,
    amount: 1
  }

  const newStore = [ ...store ]
  newStore.push(newProduct)

  return newStore
}

const RemoveProductToStore: CartReducerRemove = (id, store) => {
  return store.filter(cart => cart.cartProduct.id !== id)
}

export { AddProductToStore, RemoveProductToStore }