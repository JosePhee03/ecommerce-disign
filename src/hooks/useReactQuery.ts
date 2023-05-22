import { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { Product, Query } from '@/models'
import { getProducts, getSearchProducts } from '@/services'

function useReactQuery () {
  const [ searchParam, setSearchParam ] = useSearchParams()
  const [ products, setProducts ] = useState<Product[]>([])
  const [ total, setTotal ] = useState<number>(0)
  const params = useParams()

  const limit = 24

  const category = params.category

  const search = searchParam.get(Query.search) ?? ''
  const page = Number(searchParam.get(Query.page))

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: [ 'products', category, page, search ],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    queryFn: async ({ queryKey }) => {
      const categoryKey = queryKey[1] as string
      const pageKey = queryKey[2] as number
      const searchKey = queryKey[3] as string
      if (searchKey !== '' && categoryKey == undefined) return getSearchProducts(searchKey, pageKey, limit)
      else return getProducts(categoryKey, pageKey, limit)
    }
  })

  useEffect(() => {
    const searchFromCategory = (products: Product[], search: string, category?: string) => {
      if (search === '' || category == undefined) return products
      return products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
    }

    const newPorducts = searchFromCategory(data?.products ?? [], search, category)

    setTotal(data?.total ?? 0)
    setProducts(newPorducts)
  }, [ data ])

  const setQueryParams = (query: Query.page | Query.search, queryValue: string) => {
    let newQuery = {}
    if (query === Query.search && queryValue !== ''
    || query === Query.page && queryValue !== '0') {
      newQuery = { [query]: queryValue }
    }

    const newParams = Object.assign(
      {},
      [ ...searchParam.entries() ].reduce(
        (o, [ key, value ]) => {
          if (query === Query.page && queryValue === '0') return {}
          else return { ...o, [key]: value }
        },
        {}
      ),
      newQuery
    )

    return setSearchParam(newParams)
  }

  return {
    products,
    isLoading,
    isError,
    category,
    page,
    limit,
    total,
    refetch,
    setQueryParams,
    search,
    setSearchParam
  }
}

export default useReactQuery