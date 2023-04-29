import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { ProductType, QueryType, SearchProductType } from '@/models'
import { getProducts } from '@/services'

function useSearchProduct () {
  const [ products, setProducts ] = useState<ProductType[]>([])

  const [ searchParam, setSearchParam ] = useSearchParams()
  const params = useParams<Pick<SearchProductType, 'category'>>()

  const setQueryParams = (query: SearchProductType['query']) => {
    if (query === null) return setSearchParam()
    setSearchParam({ [QueryType.query]: query })
  }

  const searchProduct = ({ category, query }: SearchProductType)  => {
    const newProducts = [ ...products ]
    const productsByCategory = SearchProductByCategory(newProducts, category)
    const productsByTitle = SearchProductByTitle(productsByCategory, query)
    return productsByTitle
  }

  const SearchProductByTitle = (products: ProductType[], query: SearchProductType['query']) => {
    if (query === null) return products
    const lowerCaseData = query.toLowerCase()
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
      query: searchParam.get(QueryType.query)
    })
    setProducts(showNewProducts)
  }, [ params ])

  useEffect(() => {
    getProducts(params.category)
      .then(resProducts => setProducts(resProducts))

    console.log('/home')
  }, [])

  return { products, setQueryParams }

}

export default useSearchProduct