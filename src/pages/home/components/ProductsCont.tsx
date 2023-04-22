import { useEffect, useState } from 'react'
import { getProducts } from '@/services'
import { ProductType } from '@/models'


function ProductsCont () {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    getProducts().then(data => setProducts(data.products))
  }, [])

  return (
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
            <button className='product-card__footer__button'>
              <h6 className='text-sm'>
              add to card
              </h6>
            </button>
          </footer>
        </article>
      ))
      }
    </section>
  )
}

export default ProductsCont