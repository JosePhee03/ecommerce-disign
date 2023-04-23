import { StoreReducerAdd, StoreReducerRemove } from './Store.models'

const AddProductToStore: StoreReducerAdd = (product, store) => {
  const newProduct = {
    cartProducts: product,
    amount: 1
  }

  const newStore = [...store]
  newStore.push(newProduct)
  
  return newStore
}

const RemoveProductToStore: StoreReducerRemove = (product, store) => {
  return store.filter(cart => cart.cartProducts.id !== product.id)
}

export { AddProductToStore, RemoveProductToStore }