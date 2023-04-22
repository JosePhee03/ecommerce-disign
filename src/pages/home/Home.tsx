import { FilterIcon, LogoIcon, MoonIcon, SearchIcon, ShoppingCardIcon } from '@/components/icons'
import ProductsCont from './components/ProductsCont'
import { toggleDarkMode } from '@/utils/darkMode'

function Home() {
  return (
    <main className='home-layout'>
      <header className='header'>
        <div className='header__logo'>
          <LogoIcon />
          <h1 className='logo-text font-primary'>Shop</h1>
        </div>
        <div className='header__icons'>
          <button onClick={toggleDarkMode} className='button-icon'>
            <MoonIcon className='icon' />
          </button>
          <button className='button-icon'>
            <ShoppingCardIcon className='icon'/>
          </button>
        </div>
      </header>
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