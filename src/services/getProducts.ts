import { Product, ApiResponse, SearchProduct, ApiProductResponse } from '@/models'

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

function fromApiResponseToProducts (apiResponse: ApiResponse): Product[] {
  const { products } = apiResponse
  return AdapterResponseToProducts(...products)
}

export function getProductFromId (id: number): Promise<Product> {
  const apiURL = `https://dummyjson.com/products/${id}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiProductResponse>)
    .then(data => AdapterResponseToProducts(data)[0])
}

export function getProducts (category: SearchProduct['category'], page = 0, limit = 30): Promise<Product[]> {
  const skip = page * limit
  const searchCategory = category == undefined ? '' : `category/${category}`
  const apiURL = `https://dummyjson.com/products/${searchCategory}?skip=${skip}&limit=${limit}`
  return fetch(apiURL)
    .then(res => res.json() as Promise<ApiResponse>)
    .then(fromApiResponseToProducts)
}
