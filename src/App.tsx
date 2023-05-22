import { Provider } from 'react-redux'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { FooterDev } from '@/components'
import { DetailsProduct, Home, ShoppingCart } from '@/pages'
import { store } from '@/store'

function App () {

  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='/:category' element={<Outlet />}/>
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
