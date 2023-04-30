import { category } from './Products.models'

export enum QueryType {
  query = 'q',
  category = 'category'
}

export interface ParamsType {
  [QueryType.category]: category
  [QueryType.query]: string
}

export interface SearchProductType  {
  category: ParamsType[QueryType.category] | undefined
  query: ParamsType[QueryType.query] | null
}