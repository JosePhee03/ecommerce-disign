import { ShoppingCardIcon } from '@/components/icons'
import { useProduct, useSearchProduct } from '@/hooks'

function ProductsCont () {
  const { isProductInCart, addProduct, removeProduct } = useProduct()
  const { products } = useSearchProduct()

  return (
    <>
      {products.length === 0
        ? <h1>Not Fount</h1>
        : <section className='products-cont'>
          {products.map(product => (
            <article key={product.id} className='product-card bg-primary' title={product.title}>
              <img src={product.thumbnail} alt={product.title} className='product-card__img' />
              <header className='product-card__header'>
                <h6 className='text-sm medium font-primary'>{product.title}</h6>
                <p className='text-xs'>{product.category}</p>
              </header>
              <footer className='product-card__footer'>
                <h3 className='text-2xl medium font-primary'>${product.price}</h3>
                {isProductInCart(product)
                  ? <button onClick={() => removeProduct(product)} className='product-card__footer__button-in-cart'>
                    <h6 className='text-sm'>
                    in the
                    </h6>
                    <ShoppingCardIcon className='product-card__footer__button-in-cart__icon' />
                  </button>
                  : <button onClick={() => addProduct(product)} className='product-card__footer__button'>
                    <h6 className='text-sm'>
                    add to
                    </h6>
                    <ShoppingCardIcon className='product-card__footer__button__icon' />
                  </button>
                }
              </footer>
            </article>
          ))
          }
        </section>

      }
    </>
  )
}

export default ProductsCont