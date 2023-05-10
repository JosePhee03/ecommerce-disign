import { useReducer } from 'react'

import { ShoppingCart } from '@/models'
import StoreContext from './StoreContext'
import StoreReducer from './StoreReducer'

const INITIAL_VALUE: ShoppingCart[] = []

  interface StoreProviderProps {
  children: JSX.Element[] | JSX.Element
}

function StoreProvider ({ children }: StoreProviderProps) {
  const [ store, dispatch ] = useReducer(StoreReducer, INITIAL_VALUE)

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      { children }
    </StoreContext.Provider>
  )
}

export default StoreProvider