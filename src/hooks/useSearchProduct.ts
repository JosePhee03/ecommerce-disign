import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { Product, Query, SearchProduct } from '@/models'
import { getProducts } from '@/services'

const SearchProductByQuery = ({ products, query }:{products: Product[], query: SearchProduct['query']}) => {
  if (query === null) return products
  const newProducts = [ ...products ]
  const lowerCaseQuery = query.toLowerCase()
  const FilterProductByTitle = newProducts.filter(p => p.title.toLowerCase().includes(lowerCaseQuery))
  return FilterProductByTitle
}

function useSearchProduct () {
  const [ products, setProducts ] = useState<Product[]>([])
  const [ isLoanding, setIsLoanding ] = useState<boolean>(true)
  const [ isError, setIsError ] = useState<boolean>(false)
  const [ page, setPage ] = useState<number>(0)

  const [ searchParam, setSearchParam ] = useSearchParams()
  const params = useParams<Pick<SearchProduct, 'category'>>()

  const category = params.category
  const queryParam = searchParam.get(Query.query)

  const setQueryParams = (query: string) => {
    if (query === '' || query === null) return setSearchParam()
    setSearchParam({ [Query.query]: query })
  }

  useEffect(() => {
    setIsLoanding(true)
    getProducts(category, page)
      .then(resProducts => {
        const showNewProducts = SearchProductByQuery({
          products: resProducts,
          query: queryParam
        })
        setProducts(showNewProducts)
        setIsLoanding(false)
      }). catch(e => {
        console.log('error', e)
        setIsError(true)
        setIsLoanding(false)
      })

  }, [ params ])

  return { products, setQueryParams, isLoanding, isError, setPage, queryParam, category }
}

export default useSearchProduct