import { FilterCont, ProductsCont, SearchCont } from './components'
import { Header } from '@/components'
import { PRODUCTS_DATA } from '@/DATA/products'
import { ProductType } from '@/models'
import { searchProducts } from '@/services'
import { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

function Home () {
  const [ products, setProducts ] = useState<ProductType[]>(PRODUCTS_DATA)
  const location = useLocation()
  const [ searchParams ] = useSearchParams()

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam !== null) {
      const productRes = searchProducts(categoryParam)
      setProducts(productRes)
    }

  }, [ location ])

  return (
    <main className='home-layout'>
      <Header />
      <SearchCont setProducts={setProducts}/>
      <FilterCont />
      {products.length === 0
        ? <h3>Not Fount</h3>
        : <ProductsCont products={products} />
      }
    </main>
  )
}

export default Home