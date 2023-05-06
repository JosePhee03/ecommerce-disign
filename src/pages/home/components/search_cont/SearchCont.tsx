import { FormEvent, useMemo } from 'react'

import { SearchIcon } from '@/components'
import { useSearchProduct } from '@/hooks'

function SearchCont () {
  const { products, setQueryParams } = useSearchProduct()

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    console.log(form)
    const SearchData  = new FormData(form)
    const { search: data } = Object.fromEntries(SearchData)
    setQueryParams(data as string)
    form.reset()
  }

  return useMemo(() => (
    <section className='search-cont'>
      <form className='search-cont__form' onSubmit={(event) => handleOnSubmit(event)}>
        <input type="text" name="search" className='search-cont__form__input bg-primary font-primary' placeholder='Smartphone, Laptop...' />
        <button className='search-cont__form__button bg-primary'>
          <SearchIcon className='icon search-cont__form__button__icon' />
        </button>
      </form>
    </section>
  ), [ products ])
}

export default SearchCont