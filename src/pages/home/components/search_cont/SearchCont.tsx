import { FormEvent, useMemo } from 'react'

import { SearchIcon } from '@/components'
import { useReactQuery } from '@/hooks'
import { Query } from '@/models'

import './search_cont.sass'

function SearchCont () {
  const { products, setSearchParam } = useReactQuery()

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    console.log(form)
    const formData  = new FormData(form)
    const search = formData.get(Query.search) as string
    const data = search === '' ? undefined : { [Query.search]: search }
    setSearchParam(data)
    form.reset()
  }

  return useMemo(() => (
    <section className='search-cont'>
      <form className='search-cont__form' onSubmit={event => handleOnSubmit(event)}>
        <input type="text" name={Query.search} className='search-cont__form__input bg-primary font-primary' placeholder='Smartphone, Laptop...' />
        <button type='submit' title='Search button' className='search-cont__form__button bg-primary'>
          <SearchIcon className='icon search-cont__form__button__icon' />
        </button>
      </form>
    </section>
  ), [ products ])
}

export default SearchCont