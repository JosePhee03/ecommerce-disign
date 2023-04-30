import {  useSearchProduct } from '@/hooks'
import { ProductCard } from './product_cart'

function ProductsCont () {
  const { products, isLoanding, isError } = useSearchProduct()

  return (
    <section className='products-cont'>
      {isLoanding && !isError && <h1 className='tittle-text'>Loading...</h1>}
      {isError && !isLoanding && <h1 className='tittle-text'>Error conection</h1>}
      {!isError && !isLoanding && products.length === 0 && <h1 className='tittle-text'>Producto no Encontrado</h1>}
      {!isError && !isLoanding && products.length !== 0 && <ProductCard products={products} />}
    </section>
  )
}

export default ProductsCont