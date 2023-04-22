//import { useEffect, useState } from 'react'
//import { getProducts } from '@/services'
//import { ProductType } from '@/models'

import { PRODUCTS_DATA } from '@/DATA/products'
import { useProduct } from '@/hooks'
import { ProductType } from '@/models'
import { memo, useMemo } from 'react'


function ProductsCont () {

  const { addProduct } = useProduct()

  //const [products, setProducts] = useState<ProductType[]>([])
  //
  //useEffect(() => {
  //  getProducts().then(data => setProducts(data.products))
  //}, [])

  const products: ProductType[] = PRODUCTS_DATA

  return useMemo(() => (
    <section className='products-cont'>
      {products.map(product => (
        <article key={product.id} className='product-card bg-primary'>
          <img src={product.thumbnail} alt={product.title} className='product-card__img' />
          <header className='product-card__header'>
            <h6 className='text-sm medium font-primary'>{product.title}</h6>
            <p className='text-xs'>{product.category}</p>
          </header>
          <footer className='product-card__footer'>
            <h3 className='text-2xl medium font-primary'>${product.price}</h3>
            <button onClick={() => addProduct(product)} className='product-card__footer__button'>
              <h6 className='text-sm'>
              add to card
              </h6>
            </button>
          </footer>
        </article>
      ))
      }
    </section>
  ), [])
}

export default ProductsCont