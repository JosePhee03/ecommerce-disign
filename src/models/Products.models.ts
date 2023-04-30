import { CATEGORIES } from '@/constant'

const ArrayfromCategories = Object.values(CATEGORIES)
export type category =  (typeof ArrayfromCategories)[number]

export interface ProductType {
  id: number,
  title: string;
  description: string;
  price: number;
  brand: string;
  category: category;
  thumbnail: string;
}

export interface apiResponseType {
  limit: number;
  products: ProductType[];
  skip: number;
  total: number
}
