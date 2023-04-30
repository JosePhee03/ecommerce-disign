import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { ProductType, QueryType, SearchProductType } from '@/models'
import { getProducts } from '@/services'

const SearchProductByQuery = ({ products, query }:{products: ProductType[], query: SearchProductType['query']}) => {
  if (query === null) return products
  const newProducts = [ ...products ]
  const lowerCaseQuery = query.toLowerCase()
  const FilterProductByTitle = newProducts.filter(p => p.title.toLowerCase().includes(lowerCaseQuery))
  return FilterProductByTitle
}

function useSearchProduct () {
  const [ products, setProducts ] = useState<ProductType[]>([])
  const [ isLoanding, setIsLoanding ] = useState<boolean>(true)
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ page, setPage ] = useState<number>(0)

  const [ searchParam, setSearchParam ] = useSearchParams()
  const params = useParams<Pick<SearchProductType, 'category'>>()

  const setQueryParams = (query: string) => {
    if (query === '' || query === null) return setSearchParam()
    setSearchParam({ [QueryType.query]: query })
  }

  useEffect(() => {
    console.log(searchParam.get(QueryType.query))
    setIsLoanding(true)
    getProducts(params.category, page)
      .then(resProducts => {
        const showNewProducts = SearchProductByQuery({
          products: resProducts,
          query: searchParam.get(QueryType.query)
        })
        setProducts(showNewProducts)
        setIsLoanding(false)
      }). catch(e => {
        console.log('error', e)
        setIsError(true)
        setIsLoanding(false)
      })

  }, [ params ])

  return { products, setQueryParams, isLoanding, isError, setPage }
}

export default useSearchProduct