import { Home } from '@/pages'
import { StoreProvider } from '@/store'
import { FooterDev } from '@/components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App () {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:category' />
          </Route>
        </Routes>
        <FooterDev />
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
