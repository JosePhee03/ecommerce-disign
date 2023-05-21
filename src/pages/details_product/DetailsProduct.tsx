import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Header, Select, StarFillIcon, ButtonCart } from '@/components'
import { useProductsCart } from '@/hooks'
import { Product } from '@/models'
import { getProductFromId } from '@/services'

function DetailsProduct () {
  const [ product, setProduct  ] = useState<Product>()
  const { isProductInCart, removeProduct, addProduct } = useProductsCart()
  const params = useParams()
  const { id } = params
  const idProduct = Number(id)

  useEffect(() => {
    getProductFromId(idProduct).then(product => setProduct(product))

  }, [])

  return (
    <main className='details-product-layout'>
      <Header text='Details Product' />
      {product !== undefined &&
      <section className='card-details bg-primary'>
        <section className='gallery'>
          <div className='gallery__cont'>
            {product.images.map((img, index) =>
              <img title={product.brand} key={img + index} className='gallery__cont__img' src={img} />
            )}
          </div>
        </section>
        <img title={`imagen ${product.brand}`} className='details__image' src={product.images[0]} alt={product.title} />
        <article className='details bg-primary'>
          <header className='details__header'>
            <nav className='details__header__nav'>
              <Link to={'/'} className='not-decoration link text-sm text-navy-500'>Home</Link>
              <h6 className='text-sm light font-primary'>{'>'}</h6>
              <Link to={`/${product.category}`} className='not-decoration link text-sm text-navy-500'>{product.category}</Link>
              <h6 className='text-sm light font-primary'>{'>'}</h6>
              <Link to={`/${product.category}`} className='not-decoration link text-sm text-navy-500'>{product.brand}</Link>
            </nav>
            <div>
              <h2 className='title-text medium font-primary details__header__title'>{product.title}</h2>
              <h3 className='text-2xl text-navy-500'>{product.brand}</h3>
            </div>
            <h2 className='details__header__price title-text medium font-primary'>$ {product.price}</h2>
          </header>
          <section className='details__rating'>
            <div className='rating-cont'>
              <StarFillIcon className='star' />
              <StarFillIcon className='star' />
              <StarFillIcon className='star' />
              <StarFillIcon className='star' />
              <StarFillIcon className='star' />
              <h4 className='text-lg'>{product.rating}</h4>
            </div>
            <Link className='not-decoration link' to={`/${product.category}`}>
              <span className='tag text-sm medium'>{product.category}</span>
            </Link>
          </section>
          <div className='details__description'>
            <h4 className='text-lg medium font-primary'>Description:</h4>
            <p className='text-md font-primary'>{product.description}</p>
          </div>
          <footer className='details__footer'>
            <section className='details__footer__amount'>
              <h4 className='text-lg regular text-navy-500'>Amount</h4>
              <div className='details__footer__amount__input'>
                <Select mini='select-mini' textSize='text-sm' selected='1' options={[ '2', '3', '4' ]} name='amount' id='select-amount' />
                <h4 className='text-lg medium text-light-navy-500'>(Stock: {product.stock})</h4>
              </div>
            </section>
            <ButtonCart
              fontSize='text-xl'
              isProductInCart={isProductInCart(product)}
              addProduct={addProduct}
              product={product}
              removeProduct={removeProduct}
            />
          </footer>
        </article>
      </section>
      }
    </main>
  )
}

export default DetailsProduct