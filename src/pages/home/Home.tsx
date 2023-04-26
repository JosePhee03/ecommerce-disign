import { FilterCont, ProductsCont, SearchCont } from './components'
import { Header } from '@/components'
import { useSearchProduct } from '@/hooks'

function Home () {
  const { products } = useSearchProduct()
  useSearchProduct()

  return (
    <main className='home-layout'>
      <Header />
      <SearchCont />
      <FilterCont />
      {products.length === 0
        ? <h3>Not Fount</h3>
        : <ProductsCont products={products} />
      }
    </main>
  )
}

export default Home