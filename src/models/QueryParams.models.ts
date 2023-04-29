import { CATEGORIES } from '@/constant/categories'

export enum QueryType {
  query = 'q',
  category = 'category'
}

const categoriesArray = Object.values(CATEGORIES)
type category = (typeof categoriesArray)[number]

export interface ParamsType {
  [QueryType.category]: category
  [QueryType.query]: string
}

export interface SearchProductType  {
  category: ParamsType[QueryType.category] | undefined
  query: ParamsType[QueryType.query] | null
}