import getProducts, { ProductType } from '@/services/getProducts'
import { useEffect, useState } from 'react'
function App() {
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {

    getProducts().then(data => setProducts(data.products))
  }, [])


  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>{product.title}</li>
      ))
      }
    </ul>
  )
}

export default App
