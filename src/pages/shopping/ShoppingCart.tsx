import { Header } from '@/components'
import { useProductsCart } from '@/hooks'

import { PaymentCont, ShoppingCont } from './components'
import './shopping_cart.sass'

function ShoppingCart () {
  const { store, removeProduct } = useProductsCart()

  return (
    <main className="shopping-layout">
      <Header text='Shopping Cart'/>
      <ShoppingCont store={store} removeProduct={removeProduct} />
      <PaymentCont />
    </main>
  )
}

export default ShoppingCart