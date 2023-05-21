import { FormEvent, useMemo } from 'react'

import { SearchIcon } from '@/components'
import { useReactQuery } from '@/hooks'

import './search_cont.sass'

function SearchCont () {
  const { products, setQueryParams } = useReactQuery()

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
      <form className='search-cont__form' onSubmit={event => handleOnSubmit(event)}>
        <input type="text" name="search" className='search-cont__form__input bg-primary font-primary' placeholder='Smartphone, Laptop...' />
        <button type='submit' title='Search button' className='search-cont__form__button bg-primary'>
          <SearchIcon className='icon search-cont__form__button__icon' />
        </button>
      </form>
    </section>
  ), [ products ])
}

export default SearchCont