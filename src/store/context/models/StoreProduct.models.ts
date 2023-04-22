import { ProductType, ShoppingCart } from '@/models'

const AddProductToStore = (product: ProductType, store: ShoppingCart[]): ShoppingCart[] => {
  console.log('add', product)
  const newProduct = {
    cartProducts: product,
    amount: 1
  }

  const newStore = [...store]
  newStore.push(newProduct)
  
  return newStore
}

const RemoveProductToStore = (product: ProductType, store: ShoppingCart[]): ShoppingCart[] => {
  return store.filter(cart => cart.cartProducts.id !== product.id)
} 

export { AddProductToStore, RemoveProductToStore }