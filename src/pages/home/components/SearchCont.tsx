import { SearchIcon } from '@/components'
import { useSearchProduct } from '@/hooks'
import { FormEvent } from 'react'

function SearchCont () {
  const { setQueryParams } = useSearchProduct()

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { search: data } = Object.fromEntries(formData)
    setQueryParams(data as string)
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