import { Middleware } from '@reduxjs/toolkit'

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  next(action)
  window.localStorage.setItem('__redux_state__', JSON.stringify(store.getState().cart))
}

export default localStorageMiddleware