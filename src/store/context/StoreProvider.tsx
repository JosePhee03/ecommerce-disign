import React, { useReducer } from 'react'
import StoreContext from './StoreContext'
import { ShoppingCart } from '../../models/ShoppingCart'
import StoreReducer from './StoreReducer'

const INITIAL_VALUE: ShoppingCart[] = []

interface StoreProviderProps {
  children: JSX.Element[] | JSX.Element
}

function StoreProvider ({ children }: StoreProviderProps) {
  const [ store, dispatch ] = useReducer(StoreReducer, INITIAL_VALUE)

  return (
    <StoreContext.Provider value={{store, dispatch}}>
      { children }
    </StoreContext.Provider>
  )
}

export default StoreProvider