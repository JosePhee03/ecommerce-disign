import { ProductType, ApiResponseType, SearchProductType, ApiProductResponse } from '@/models'

function AdapterResponseToProducts (...products: ApiProductResponse[]): ProductType[] {
  return products.map(product => {
    return {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      brand: product.brand,
      category: product.category,
      rating: product.rating,
      stock: product.stock,
      images: [ product.thumbnail ].concat(product.images)
    }
  })
}

function fromApiResponseToProducts (apiResponse: ApiResponseType): ProductType[] {
  const { products } = apiResponse
  return AdapterResponseToProducts(...products)
}

export function getProductFromId (id: number) {
  const apiURL = `https://dummyjson.com/products/${id}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiProductResponse>)
    .then(data => AdapterResponseToProducts(data)[0])
}

export function getProducts (category: SearchProductType['category'], page = 0, limit = 30) {
  const skip = page * limit
  const searchCategory = category == undefined ? '' : `category/${category}`
  const apiURL = `https://dummyjson.com/products/${searchCategory}?skip=${skip}&limit=${limit}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiResponseType>)
    .then(fromApiResponseToProducts)
}
