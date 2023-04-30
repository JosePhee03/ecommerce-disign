import { LogoIcon, MoonIcon, ShoppingCardIcon, SunIcon } from '@/components/icons'
import { useDarkMode, useProductsCart } from '@/hooks'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

function Header () {
  const { store } = useProductsCart()
  const { theme, toggleTheme } = useDarkMode()

  const mountProducts = store.length

  return useMemo(() => (
    <header className='header'>
      <Link to={'/'} className='header__logo'>
        <LogoIcon className='logo-icon' />
        <h1 className='logo-text font-primary'>Shop</h1>
      </Link>
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
  ), [ theme, mountProducts ])
}

export default Header