import { Header } from '@/components'
import { useProductsCart } from '@/hooks'
import { createPortal } from 'react-dom'

function ShoppingCart () {
  const { store } = useProductsCart()

  return createPortal(
    <section className="shopping-layout">
      <Header text='Shopping Cart'/>
      {
        store.map(cart => (
          <article>
            <h2>{cart.cartProducts.title}</h2>
          </article>
        ))
      }
    </section>,
    document.getElementById('portal') as HTMLElement
  )
}

export default ShoppingCart