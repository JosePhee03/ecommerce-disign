import { createContext } from 'react'
import { StoreContextInterface } from './models/Store.models'

const StoreContext = createContext<StoreContextInterface | null>(null)

export default StoreContext