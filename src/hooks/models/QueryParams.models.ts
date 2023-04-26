export enum QueryType {
  query = 'q',
  category = 'category'
}

export interface ParamsType {
  [QueryType.category]: CategoryProduct
  [QueryType.query]: string
}

export type CategoryParam = Pick<ParamsType, QueryType.category>

export enum CategoryProduct {
  SMARTPHONES = 'smartphones',
  LAPTOPS = 'laptops'
}

export interface SearchProductType  {
  category: CategoryProduct | undefined
  data: string | null
}