import { FilterIcon, SearchIcon } from '@/components/icons'
import { ProductsCont } from './components'
import { Header } from '@/components/header'

function Home() {
  return (
    <main className='home-layout'>
      <Header />
      <section className='search-cont'>
        <SearchIcon className='icon search-cont__icon'/>
        <input type="text" className='search-cont__input bg-primary font-primary' placeholder='Smartphone, Laptop...' />
      </section>
      <section className='filter-cont'>
        <h2 className='title-text medium font-primary'>Products</h2>
        <button className='filter-button'>
          <h6 className='text-sm'>Filters</h6>
          <FilterIcon className='filter-button__icon'/>
        </button>
      </section>
      <ProductsCont />
    </main>
  )
}

export default Home