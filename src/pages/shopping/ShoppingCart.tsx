import { Header, Select, TrashIcon } from '@/components'
import { useProductsCart } from '@/hooks'
import { createPortal } from 'react-dom'
import './shopping_cart.sass'

function ShoppingCart () {
  const { store } = useProductsCart()

  return createPortal(
    <section className="shopping-layout">
      <Header text='Shopping Cart'/>
      {store.length === 0 && <h5>Carrito vacio</h5>}
      {store.length !== 0 &&
        store.map(cart => (
          <article className="store-card bg-primary">
            <picture className='store-card__img'>
              <img src={cart.cartProducts.images[0]} alt={`image ${cart.cartProducts.title}`} />
            </picture>
            <header className='store-card__header'>
              <h3 className='text-2xl medium'>{cart.cartProducts.title}</h3>
              <h4 className='text-lg text-navy-500'>{cart.cartProducts.brand}</h4>
            </header>
            <footer className='store-card__footer'>
              <h3 className='text-2xl medium'>$ {cart.cartProducts.price}</h3>
              <section className='store-card__footer__amount'>
                <Select
                  id='select-amount'
                  name='amount'
                  options={[ '2', '3', '4' ]}
                  selected='1'
                  textSize='text-sm'
                  mini='select-mini'
                />
                <button>
                  <TrashIcon className='icon' />
                </button>
              </section>
            </footer>
          </article>
        ))
      }
    </section>,
    document.getElementById('portal') as HTMLElement
  )
}

export default ShoppingCart