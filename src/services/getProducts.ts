import { apiResponseType} from '@/models/Products.models'

function fromApiResponseToProducts(apiResponse: apiResponseType) {
  const { products } = apiResponse
  return {
    products
  }
}

function getProducts() {
  const apiURL = 'https://dummyjson.com/products?&limit=5'
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}

export default getProducts
