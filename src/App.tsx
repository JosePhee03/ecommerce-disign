import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { DetailsProduct, Home, ShoppingCart } from '@/pages'
import { StoreProvider } from '@/store'
import { FooterDev } from '@/components'

function App () {

  return (
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:category' />
          </Route>
          <Route path='/products/:id' element={<DetailsProduct />} ></Route>
          <Route path='/shopping' element={<ShoppingCart />} ></Route>
        </Routes>
        <FooterDev />
      </StoreProvider>
    </BrowserRouter>
  )
}

export default App
