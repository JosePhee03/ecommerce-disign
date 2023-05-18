import { CATEGORIES } from '@/constant'

const ArrayfromCategories = Object.values(CATEGORIES)
export type Category =  (typeof ArrayfromCategories)[number]

export interface Product {
  id: number,
  title: string;
  description: string;
  price: number;
  brand: string;
  rating: number;
  stock: number;
  category: Category;
  images: string[];
}

export interface ApiResponse {
  limit: number;
  products: ApiProductResponse[];
  skip: number;
  total: number
}

export interface ApiProductResponse {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: Category;
  thumbnail: string;
  images: string[];
}
