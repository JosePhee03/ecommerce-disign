import { Product, Cart } from '@/models'

export type CartReducerAdd = (product: Product, store: Cart[]) => Cart[]
export type CartReducerRemove = (id: number, store: Cart[]) => Cart[]
