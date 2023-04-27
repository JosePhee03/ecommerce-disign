import { FilterCont, ProductsCont, SearchCont } from './components'
import { Header } from '@/components'

function Home () {

  return (
    <main className='home-layout'>
      <Header />
      <SearchCont />
      <FilterCont />
      <ProductsCont />
    </main>
  )
}

export default Home