import { BanIcon, RotateIcon } from '@/components'
import { useReactQuery } from '@/hooks'

import { ProductCard } from '../product_cart'

import './products_cont.sass'

function ProductsCont () {
  const { isError, isLoading, products } = useReactQuery()

  return (
    <>
      {isLoading ? <div className='center'><span className="loader"></span></div> :
        isError ? <div className='center'><h1 className='title-text font-primary'>Connection error</h1><RotateIcon className='icon-error' /><button className='button-error' onClick={() => history.go()}>Refresh</button></div> :
          products?.length == 0 ? <div className='center'><h1 className='title-text font-primary'>No results found</h1><BanIcon className='icon-error' /><button className='button-error' onClick={() => history.back()}>Back</button></div> :
            <section className='products-cont'>
              {products?.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
              }
            </section>
      }
    </>
  )
}

export default ProductsCont