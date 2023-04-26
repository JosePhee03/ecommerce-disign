import { Home } from '@/pages'
import { StoreProvider } from '@/store'
import { FooterDev } from '@/components'
import { BrowserRouter } from 'react-router-dom'

function App () {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Home />
        <FooterDev />
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
