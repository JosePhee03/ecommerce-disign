import { createContext } from 'react'

import { StoreContextInterface } from '../models'

const StoreContext = createContext<StoreContextInterface | null>(null)

export default StoreContext