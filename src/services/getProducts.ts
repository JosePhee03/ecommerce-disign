export interface ProductType {
  id: number,
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[]
}

interface apiResponseType {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number
}

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
