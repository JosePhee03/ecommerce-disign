import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Provider } from 'react-redux'

import { store } from '@/store'
import { DetailsProduct, Home, ShoppingCart } from '@/pages'
import { FooterDev } from '@/components'

function App () {

  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:category' />
          </Route>
          <Route path='/products/:id' element={<DetailsProduct />} ></Route>
          <Route path='/shopping' element={<ShoppingCart />} ></Route>
        </Routes>
        <FooterDev />
      </BrowserRouter>
    </Provider>
  )
}

export default App
