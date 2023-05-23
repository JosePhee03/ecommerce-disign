import { BanIcon, RotateIcon } from '@/components'
import { useReactQuery } from '@/hooks'

import { Pagination } from '../pagination/'
import { ProductCard } from '../product_cart'

import './products_cont.sass'

function ProductsCont () {
  const { isError, isLoading, products, refetch, limit, page, total, setQueryParams } = useReactQuery()

  if (isLoading) return <div className='center'><span className="loader"></span></div>
  if (isError) return <div className='center'><h1 className='title-text font-primary'>Connection error</h1><RotateIcon className='icon-error' /><button className='button-error' onClick={() => refetch()}>Refresh</button></div>
  if (products?.length === 0) return <div className='center'><h1 className='title-text font-primary'>No results found</h1><BanIcon className='icon-error' /><button className='button-error' onClick={() => history.back()}>Back</button></div>
  else return (
    <>
      <section className='products-cont'>
        {products?.map(product => (
          <ProductCard key={product.id} product={product} />
        ))
        }
      </section>
      {total >= limit &&
        <Pagination
          limit={limit}
          page={page}
          total={total}
          setQueryParams={setQueryParams}
        />
      }
    </>
  )
}

export default ProductsCont