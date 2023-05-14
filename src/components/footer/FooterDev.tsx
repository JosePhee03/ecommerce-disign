import { useProductsCart } from '@/hooks'

import './footer_dev.sass'

function FooterDev () {
  const { cart } = useProductsCart()

  return (
    <footer className='footer-dev'>
      {cart.map(({ cartProduct }) => (
        <article key={cartProduct.id}>
          <h3>{cartProduct.id}</h3>
          <h4>{cartProduct.title}</h4>
        </article>
      ))}
    </footer>
  )
}

export default FooterDev