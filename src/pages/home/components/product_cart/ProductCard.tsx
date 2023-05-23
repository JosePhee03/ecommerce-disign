import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'

import { ButtonCart } from '@/components'
import { useProductsCart } from '@/hooks'
import { Product } from '@/models'

import './product_card.sass'

const Image = lazy(() => import('@/components/image/Image'))

interface PorductCartProps {
  product: Product,
}

function ProductCard ({ product }: PorductCartProps) {
  const { addProduct, isProductInCart, removeProduct  } = useProductsCart()

  return (
    <Link key={product.id} title={product.title} className='not-decoration link' to={`/products/${product.id}`}>
      <article className='product-card bg-primary'>
        <Suspense fallback={<h1>CARGANDO...</h1>}>
          <Image src={product.images[0]} loading='lazy' alt={product.title} className='product-card__img' />
        </Suspense>
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
    </Link>
  )
}

export default ProductCard