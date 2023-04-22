import { Home } from '@/pages'
import { StoreProvider } from '@/store'
import FooterDev from '@/components/FooterDev'

function App() {

  return (
    <StoreProvider>
      <Home />
      <FooterDev />
    </StoreProvider>
  )
}

export default App
