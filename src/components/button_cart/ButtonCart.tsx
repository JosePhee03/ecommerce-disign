import { ProductType } from '@/models'
import { ShoppingCardIcon } from '@/components'

import './button_cart.sass'

interface ButtonCartProps {
  isProductInCart: boolean
  removeProduct: (id: number) => void
  addProduct: (product: ProductType) => void
  product: ProductType
  fontSize: string
}

function ButtonCart ({ isProductInCart, removeProduct, product, addProduct, fontSize }: ButtonCartProps) {
  return (
    <>
      {isProductInCart
        ? <button onClick={() => removeProduct(product.id)} className={'button-in-cart ' + fontSize}>
          <h6 >
            in the
          </h6>
          <ShoppingCardIcon className='button-in-cart__icon' />
        </button>
        : <button onClick={() => addProduct(product)} className={'button-normal ' + fontSize}>
          <h6 >
            add to
          </h6>
          <ShoppingCardIcon className='button-normal__icon' />
        </button>
      }
    </>
  )
}

export default ButtonCart