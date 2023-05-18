import { Link } from 'react-router-dom'

import { Select, TrashIcon } from '@/components'
import { Cart } from '@/models'

import './shopping_cont.sass'

interface ShoppingContProps {
  cart: Cart[]
  removeProduct: (id: number) => void
}

function ShoppingCont ({ cart, removeProduct }: ShoppingContProps) {
  return (
    <section className='shopping-cont'>
      {cart.length === 0 && <h5>Carrito vacio</h5>}
      {cart.length !== 0 &&
        cart.map(cart => (
          <article className="cart-card bg-primary">
            <picture className='cart-card__img'>
              <Link className='cart-card__img__link ' to={`/products/${cart.cartProduct.id}`}>
                <img src={cart.cartProduct.images[0]} alt={`image ${cart.cartProduct.title}`} />
              </Link>
            </picture>
            <header className='cart-card__header'>
              <h3 className='text-2xl medium font-primary'>{cart.cartProduct.title}</h3>
              <h4 className='text-lg text-navy-500'>{cart.cartProduct.brand}</h4>
            </header>
            <footer className='cart-card__footer'>
              <h3 className='text-2xl medium font-primary'>$ {cart.cartProduct.price}</h3>
              <section className='cart-card__footer__amount'>
                <Select
                  id='select-amount'
                  name='amount'
                  options={[ '2', '3', '4' ]}
                  selected={`${cart.amount}`}
                  textSize='text-sm'
                  mini='select-mini'
                />
                <button title='button remove product' type='button' onClick={() => removeProduct(cart.cartProduct.id)} className='button-trash'>
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