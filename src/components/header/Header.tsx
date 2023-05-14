import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { useDarkMode, useProductsCart } from '@/hooks'

import { ArrowLeftIcon, LogoIcon, MoonIcon, ShoppingCardIcon, SunIcon } from '@/components'

interface HeaderProps {
  variant?: 'home'
  text: string
}

function Header ({ variant, text }: HeaderProps) {
  const { cart } = useProductsCart()
  const { theme, toggleTheme } = useDarkMode()

  const mountProducts = cart.length

  const HeaderVariant = ({ variant, text }: HeaderProps): JSX.Element => {
    switch (variant) {
    case 'home':
      return (
        <>
          <LogoIcon className='logo-icon' />
          <h1 className='logo-text font-primary'>{text}</h1>
        </>)
    default:
      return (
        <>
          <ArrowLeftIcon className='icon' />
          <h1 className='logo-text font-primary'>{text}</h1>
        </>)
    }
  }

  return useMemo(() => (
    <header className='header'>
      <Link title={`Go to ${variant ?? 'back'}`}  to={'/'} className='link header__logo'>
        {HeaderVariant({ variant, text })}
      </Link>
      <div className='header__icons'>
        <button title='Change theme' type='button' onClick={toggleTheme} className='button-icon'>
          {theme === 'dark'
            ? <MoonIcon className='icon' />
            : <SunIcon className='icon' />
          }
        </button>
        <Link title='Go to shopping' className='link button-icon shopping-cart-icon' to={'/shopping'}>
          <ShoppingCardIcon className='icon' />
          {mountProducts !== 0 &&
            <span className='shopping-cart-icon__counter text-xs medium'>
              {mountProducts}
            </span>
          }
        </Link>
      </div>
    </header>
  ), [ theme, mountProducts ])
}

export default Header