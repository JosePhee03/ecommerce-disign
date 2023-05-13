import { Link } from 'react-router-dom'

import { Select, TrashIcon } from '@/components'
import { ShoppingCart } from '@/models'

import './shopping_cont.sass'

interface ShoppingContProps {
  store: ShoppingCart[]
  removeProduct: (id: number) => void
}

function ShoppingCont ({ store, removeProduct }: ShoppingContProps) {
  return (
    <section className='shopping-cont'>
      {store.length === 0 && <h5>Carrito vacio</h5>}
      {store.length !== 0 &&
        store.map(cart => (
          <article className="store-card bg-primary">
            <picture className='store-card__img'>
              <Link to={`/products/${cart.cartProducts.id}`}>
                <img src={cart.cartProducts.images[0]} alt={`image ${cart.cartProducts.title}`} />
              </Link>
            </picture>
            <header className='store-card__header'>
              <h3 className='text-2xl medium font-primary'>{cart.cartProducts.title}</h3>
              <h4 className='text-lg text-navy-500'>{cart.cartProducts.brand}</h4>
            </header>
            <footer className='store-card__footer'>
              <h3 className='text-2xl medium font-primary'>$ {cart.cartProducts.price}</h3>
              <section className='store-card__footer__amount'>
                <Select
                  id='select-amount'
                  name='amount'
                  options={[ '2', '3', '4' ]}
                  selected={`${cart.amount}`}
                  textSize='text-sm'
                  mini='select-mini'
                />
                <button title='button remove product' type='button' onClick={() => removeProduct(cart.cartProducts.id)} className='button-trash'>
                  <TrashIcon className='button-trash__icon' />
                </button>
              </section>
            </footer>
          </article>
        ))
      }
    </section>
  )
}

export default ShoppingCont