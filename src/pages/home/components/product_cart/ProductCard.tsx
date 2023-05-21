import { Link } from 'react-router-dom'

import { ButtonCart } from '@/components'
import { useProductsCart } from '@/hooks'
import { Product } from '@/models'

import './product_card.sass'

interface PorductCartProps {
  product: Product,
}

function ProductCard ({ product }: PorductCartProps) {
  const { addProduct, isProductInCart, removeProduct  } = useProductsCart()

  return (
    <Link tabIndex={0} key={product.id} title={product.title} className='not-decoration link' to={`/products/${product.id}`}>
      <article className='product-card bg-primary'>
        <img src={product.images[0]} alt={product.title} className='product-card__img' />
        <header className='product-card__header'>
          <h6 className='text-sm medium font-primary'>{product.title}</h6>
          <p className='text-xs'>{product.category}</p>
        </header>
        <footer className='product-card__footer'>
          <h3 className='text-2xl medium font-primary'>${product.price}</h3>
          <ButtonCart
            fontSize='text-sm'
            tabIndex={1}
            isProductInCart={isProductInCart(product)}
            addProduct={addProduct}
            product={product}
            removeProduct={removeProduct}
          />
        </footer>
      </article>
    </Link>
  )
}

export default ProductCard