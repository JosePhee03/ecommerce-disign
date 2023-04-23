import { LogoIcon, MoonIcon, ShoppingCardIcon, SunIcon } from '@/components/icons'
import { useDarkMode, useProduct } from '@/hooks'


function Header() {
  const { store } = useProduct()
  const { theme, toggleTheme } = useDarkMode()


  const mountProducts = store.length

  return (
    <header className='header'>
      <div className='header__logo'>
        <LogoIcon />
        <h1 className='logo-text font-primary'>Shop</h1>
      </div>
      <div className='header__icons'>
        <button onClick={toggleTheme} className='button-icon'>
          {theme === 'dark' 
            ? <MoonIcon className='icon' />
            : <SunIcon className='icon' />
          }
        </button>
        <button className='button-icon shopping-cart-icon'>
          <ShoppingCardIcon className='icon' />
          {mountProducts !== 0 &&
            <span className='shopping-cart-icon__counter text-xs medium'>
              {mountProducts}
            </span>
          }
        </button>
      </div>
    </header>
  )
}

export default Header