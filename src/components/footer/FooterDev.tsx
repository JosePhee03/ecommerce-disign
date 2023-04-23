import { useProduct } from '@/hooks'
import './footer_dev.sass'

function FooterDev() {
  const { store } = useProduct()
  return (
    <footer className='footer-dev'>
      {store.map(cart => (
        <article key={cart.cartProducts.id}>
          <h3>{cart.cartProducts.id}</h3>
          <h4>{cart.cartProducts.title}</h4>
        </article>
      ))}
    </footer>
  )
}

export default FooterDev