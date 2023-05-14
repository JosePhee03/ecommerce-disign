import { ProductType, ShoppingCart } from '@/models'
import { AddProductToStore, RemoveProductToStore } from '@/store/models'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: ShoppingCart[] = (() => {
  const localStoraState = window.localStorage.getItem('__redux_state__')
  return localStoraState !== null ? JSON.parse(localStoraState) : []
})()

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    ADD_PRODUCT: (state, action: PayloadAction<ProductType>) => {
      return AddProductToStore(action.payload, state)
    },
    REMOVE_PRODUCT: (state, action: PayloadAction<number>) => {
      return RemoveProductToStore(action.payload, state)
    }
  }
})

// Action creators are generated for each case reducer function
export const { ADD_PRODUCT, REMOVE_PRODUCT } = counterSlice.actions

export default counterSlice.reducer