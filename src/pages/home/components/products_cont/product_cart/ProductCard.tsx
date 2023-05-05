import { ShoppingCardIcon } from '@/components'
import ButtonCart from '@/components/button_cart/ButtonCart'
import { useProductsCart } from '@/hooks'
import { ProductType } from '@/models'
import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard ({ products }: { products: ProductType[] }) {
  const { isProductInCart, addProduct, removeProduct } = useProductsCart()

  return (
    <>
      {products.map(product => (
        <Link className='not-decoration' to={`/products/${product.id}`}>
          <article key={product.id} className='product-card bg-primary' title={product.title}>
            <img src={product.images[0]} alt={product.title} className='product-card__img' />
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
      ))
      }

    </>
  )
}

export default ProductCard