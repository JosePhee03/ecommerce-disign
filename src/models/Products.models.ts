export interface ProductType {
  id: number,
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
}

export interface apiResponseType {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number
}