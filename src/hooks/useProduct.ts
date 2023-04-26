import { useContext } from 'react'
import { ProductType } from '@/models'
import { StoreContext, StoreContextInterface, TypeStoreActions } from '@/store'

function useProduct () {
  const { store, dispatch } = useContext(StoreContext) as StoreContextInterface

  const isProductInCart = (product: ProductType) => store.some(cart => cart.cartProducts.id === product.id)
  const addProduct = (product: ProductType) => dispatch({ type: TypeStoreActions.ADD, payload: product })
  const removeProduct = (product: ProductType) => dispatch({ type: TypeStoreActions.REMOVE, payload: product })

  return { store, addProduct, removeProduct, isProductInCart }
}

export default useProduct