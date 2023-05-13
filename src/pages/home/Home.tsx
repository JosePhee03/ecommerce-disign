import { Header } from '@/components'

import { FilterCont, ProductsCont, SearchCont } from './components'

import './home.sass'

function Home () {

  return (
    <main className='home-layout'>
      <Header variant='home' text='Shop' />
      <SearchCont />
      <FilterCont />
      <ProductsCont />
    </main>
  )
}

export default Home