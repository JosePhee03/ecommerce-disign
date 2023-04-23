import { createContext } from 'react'
import { StoreContextInterface } from '@/store/models/'

const StoreContext = createContext<StoreContextInterface | null>(null)

export default StoreContext