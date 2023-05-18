import { Category } from './Products.models'

export enum Query {
  query = 'q',
  category = 'category'
}

export interface Params {
  [Query.category]: Category
  [Query.query]: string
}

export interface SearchProduct  {
  category: Params[Query.category] | undefined
  query: Params[Query.query] | null
}