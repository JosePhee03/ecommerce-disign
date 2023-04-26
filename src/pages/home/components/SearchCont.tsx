import { SearchIcon } from '@/components'
import { ProductType } from '@/models'
import { searchProducts } from '@/services'
import { FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchCont ({ setProducts }: { setProducts: React.Dispatch<React.SetStateAction<ProductType[]>> }) {
  const [ , setSearchParams ] = useSearchParams()

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { search: data } = Object.fromEntries(formData)
    setSearchParams({ 'q': data as string })
    const productRes = searchProducts(data as string)
    setProducts(productRes)
  }

  return (
    <section className='search-cont'>
      <form className='search-cont__form' onSubmit={handleOnSubmit}>
        <input type="text" name="search" className='search-cont__form__input bg-primary font-primary' placeholder='Smartphone, Laptop...' />
        <button className='search-cont__form__button bg-primary'>
          <SearchIcon className='icon search-cont__form__button__icon' />
        </button>
      </form>
    </section>
  )
}

export default SearchCont