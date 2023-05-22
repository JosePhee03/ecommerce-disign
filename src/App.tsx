import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { FooterDev } from '@/components'
import { store } from '@/store'

const Home = lazy(() => import('@/pages/home/Home'))
const DetailsProduct = lazy(() => import('@/pages/details_product/DetailsProduct'))
const ShoppingCart = lazy(() => import('@/pages/shopping/ShoppingCart'))

function App () {

  return (
    <Provider store={store} >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />}>
              <Route path='/:category' element={<Outlet />}/>
            </Route>
            <Route path='/products/:id' element={<DetailsProduct />} ></Route>
            <Route path='/shopping' element={<ShoppingCart />} ></Route>
          </Route>
        </Routes>
        <FooterDev />
      </BrowserRouter>
    </Provider>
  )
}

function Layout () {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  )
}

export default App
