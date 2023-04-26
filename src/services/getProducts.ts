import { apiResponseType } from '@/models'

function fromApiResponseToProducts (apiResponse: apiResponseType) {
  const { products } = apiResponse
  return {
    products
  }
}

export function getProducts (apiURL: string) {
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}
