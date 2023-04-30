import { ProductType, SearchProductType, apiResponseType } from '@/models'

function fromApiResponseToProducts (apiResponse: apiResponseType): ProductType[] {
  const { products } = apiResponse
  return products.map(product => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      brand: product.brand,
      category: product.category,
      thumbnail: product.thumbnail
    }
  })
}

export function getProducts (category: SearchProductType['category'], page = 0, limit = 30) {
  const skip = page * limit
  const searchCategory = category == undefined ? '' : `category/${category}`
  const apiURL = `https://dummyjson.com/products/${searchCategory}?skip=${skip}&limit=${limit}`
  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToProducts)
}
