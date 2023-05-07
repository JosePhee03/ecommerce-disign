import { ArrowLeftIcon, LogoIcon, MoonIcon, ShoppingCardIcon, SunIcon } from '@/components/icons'
import { useDarkMode, useProductsCart } from '@/hooks'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  variant?: 'home'
  text: string
}

function Header ({ variant, text }: HeaderProps) {
  const { store } = useProductsCart()
  const { theme, toggleTheme } = useDarkMode()

  const mountProducts = store.length

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
      <Link to={'/'} className='header__logo'>
        {HeaderVariant({ variant, text })}
      </Link>
      <div className='header__icons'>
        <button onClick={toggleTheme} className='button-icon'>
          {theme === 'dark'
            ? <MoonIcon className='icon' />
            : <SunIcon className='icon' />
          }
        </button>
        <Link to={'/shopping'}>
          <button className='button-icon shopping-cart-icon'>
            <ShoppingCardIcon className='icon' />
            {mountProducts !== 0 &&
            <span className='shopping-cart-icon__counter text-xs medium'>
              {mountProducts}
            </span>
            }
          </button>
        </Link>
      </div>
    </header>
  ), [ theme, mountProducts ])
}

export default Header