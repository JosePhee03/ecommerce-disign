import { BanIcon, RotateIcon } from '@/components'
import { useSearchProduct } from '@/hooks'
import { ProductCard } from './product_cart'

function ProductsCont () {
  const { products, isLoanding, isError } = useSearchProduct()

  return (
    <>
      {isLoanding && !isError && <div className='center'><span className="loader"></span></div>}
      {isError && !isLoanding && <div className='center'><h1 className='title-text font-primary'>Connection error</h1><RotateIcon className='icon-error' /><button className='button-error' onClick={() => history.go()}>Refresh</button></div>}
      {!isError && !isLoanding && products.length === 0 && <div className='center'><h1 className='title-text font-primary'>No results found</h1><BanIcon className='icon-error' /><button className='button-error' onClick={() => history.back()}>Back</button></div>}
      {!isError && !isLoanding && products.length !== 0 &&
       <section className='products-cont'>
         {products.map(product => (
           <ProductCard product={product}/>
         ))
         }
       </section>
      }
    </>

  )
}

export default ProductsCont