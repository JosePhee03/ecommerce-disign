import { Product, ApiResponse, ApiProductResponse, AdaptedResponse } from '@/models'

function AdapterResponseToProducts (...products: ApiProductResponse[]): Product[] {
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

export function fromApiResponseToProducts (apiResponse: ApiResponse): AdaptedResponse {
  const { products, total } = apiResponse
  return {
    products: AdapterResponseToProducts(...products),
    total
  }

}

export function getSearchProducts (search: string, page = 0, limit = 30): Promise<AdaptedResponse> {
  const skip = page * limit
  const apiURL = `https://dummyjson.com/products/search?q=${search}&skip=${skip}&limit=${limit}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiResponse>)
    .then(fromApiResponseToProducts)
}

export function getProductFromId (id: number): Promise<Product> {
  const apiURL = `https://dummyjson.com/products/${id}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiProductResponse>)
    .then(data => AdapterResponseToProducts(data)[0])
}

export function getProducts (category: string, page = 0, limit = 30): Promise<AdaptedResponse> {
  const skip = page * limit
  const searchCategory = category == undefined ? '' : `category/${category}`
  const apiURL = `https://dummyjson.com/products/${searchCategory}?skip=${skip}&limit=${limit}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiResponse>)
    .then(fromApiResponseToProducts)
}
