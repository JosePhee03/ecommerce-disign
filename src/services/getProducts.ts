import { PRODUCTS_DATA } from '@/DATA/products'
import { apiResponseType } from '@/models'

function fromApiResponseToProducts (apiResponse: apiResponseType) {
  const { products } = apiResponse
  return {
    products
  }
}

export function searchProducts (data: string) {
  const lowerCaseData = data.toLowerCase()
  return PRODUCTS_DATA.filter(p => p.title.toLowerCase().includes(lowerCaseData))
}

export function getProducts (apiURL: string) {
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}
