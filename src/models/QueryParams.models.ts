import { Category } from './Products.models'

export enum Query {
  search = 'search',
  category = 'category',
  page = 'page'
}

export interface SearchParams {
  [Query.search]?: string
  [Query.page]?: number
}

export interface SearchProduct  {
  category: Category | undefined
  query: string | null
}