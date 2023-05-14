import { ProductType } from '@/models'
import { useAppDispatch, useAppSelector } from '@/store'

import { ADD_PRODUCT, REMOVE_PRODUCT } from '@/store/redux/slices/cartSlice'

function useProductsCart () {
  const cart = useAppSelector(state => state.cart)
  const dispatch = useAppDispatch()

  const isProductInCart = (product: ProductType) => cart.some(cart => cart.cartProduct.id === product.id)
  const addProduct = (product: ProductType) => dispatch(ADD_PRODUCT(product))
  const removeProduct = (id: number) => dispatch(REMOVE_PRODUCT(id))

  return { cart, addProduct, removeProduct, isProductInCart }
}

export default useProductsCart