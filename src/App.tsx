import { Home } from '@/pages'
import { StoreProvider } from '@/store'
import { FooterDev } from '@/components'

function App() {

  return (
    <StoreProvider>
      <Home />
      <FooterDev />
    </StoreProvider>
  )
}

export default App
