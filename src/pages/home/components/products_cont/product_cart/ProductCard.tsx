import { Link } from 'react-router-dom'

import { ButtonCart } from '@/components'
import { ProductType } from '@/models'
import { useProductsCart } from '@/hooks'
import './product_card.sass'

interface PorductCartProps {
  product: ProductType,
}

function ProductCard ({ product }: PorductCartProps) {
  const { addProduct, isProductInCart, removeProduct  } = useProductsCart()

  return (
    <article className='product-card bg-primary' title={product.title}>
      <Link key={product.id} className='not-decoration' to={`/products/${product.id}`}>
        <img src={product.images[0]} alt={product.title} className='product-card__img' />
      </Link>
      <header className='product-card__header'>
        <h6 className='text-sm medium font-primary'>{product.title}</h6>
        <p className='text-xs'>{product.category}</p>
      </header>
      <footer className='product-card__footer'>
        <h3 className='text-2xl medium font-primary'>${product.price}</h3>
        <ButtonCart
          fontSize='text-sm'
          isProductInCart={isProductInCart(product)}
          addProduct={addProduct}
          product={product}
          removeProduct={removeProduct}
        />
      </footer>
    </article>
  )
}

export default ProductCard