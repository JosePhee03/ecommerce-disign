import { StoreReducerAdd, StoreReducerRemove } from './Store.models'

const AddProductToStore: StoreReducerAdd = (product, store) => {
  const newProduct = {
    cartProduct: product,
    amount: 1
  }

  const newStore = [ ...store ]
  newStore.push(newProduct)

  return newStore
}

const RemoveProductToStore: StoreReducerRemove = (id, store) => {
  return store.filter(cart => cart.cartProduct.id !== id)
}

export { AddProductToStore, RemoveProductToStore }