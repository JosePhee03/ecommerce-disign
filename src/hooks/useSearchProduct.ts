import { PRODUCTS_DATA } from '@/DATA/products'
import { ProductType } from '@/models'
import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { CategoryParam, ParamsType, QueryType, SearchProductType } from './models'

function useSearchProduct () {
  const INITIAL_STATE_PRODUCTS = PRODUCTS_DATA
  const [ products, setProducts ] = useState<ProductType[]>(INITIAL_STATE_PRODUCTS)

  const [ searchParam, setSearchParam ] = useSearchParams()
  const params = useParams<CategoryParam>()

  const setQueryParams = (query: ParamsType[QueryType.query]) => {
    console.log(query)
    if (query === '') return setSearchParam()
    setSearchParam({ [QueryType.query]: query })
  }

  const searchProduct = ({ category, data }: SearchProductType)  => {
    const newProducts: ProductType[] = INITIAL_STATE_PRODUCTS
    const productsByCategory = SearchProductByCategory(newProducts, category)
    const productsByTitle = SearchProductByTitle(productsByCategory, data)
    return productsByTitle
  }

  const SearchProductByTitle = (products: ProductType[], data: SearchProductType['data']) => {
    if (data === null) return products
    const lowerCaseData = data.toLowerCase()
    const FilterProductByTitle = products.filter(p => p.title.toLowerCase().includes(lowerCaseData))
    return FilterProductByTitle
  }

  const SearchProductByCategory = (products: ProductType[], category: SearchProductType['category']) => {
    if (category === undefined) return products
    const FilterProductByCategory = products.filter(product => product.category === category)
    return FilterProductByCategory
  }

  useEffect(() => {
    const showNewProducts = searchProduct({
      category: params.category,
      data: searchParam.get(QueryType.query)
    })

    setProducts(showNewProducts)
  }, [ params ])

  return { products, setQueryParams }

}

export default useSearchProduct