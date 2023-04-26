import { FilterIcon } from '@/components'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function FilterCont () {
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const [ searchParams ] = useSearchParams()
  const param = searchParams.get('q')

  return (
    <section className='filter-cont'>
      <h2 className='title-text medium font-primary'>Products</h2>
      <div className='modal-cont'>
        <button onClick={() => setShowModal(true) } className='filter-cont__button'>
          <h6 className='text-sm'>Filters</h6>
          <FilterIcon className='filter-cont__button__icon' />
        </button>
        {showModal &&
          <article className='modal'>
            <header className='modal__header'>
              <button className='modal__header__button-closezyyyyyyy medium'>x</button>
              <button className='modal__header__button-apply text-xlzyyyyyyy medium'>Aplicar</button>
            </header>
            <select name="category" id="select-category">
              <option value="smartphone">smartphone</option>
              <option value="laptop">laptop</option>
            </select>
            <label htmlFor="lowest-price">
              <input type="radio" name="price" id="lowest-price" />
              lowest-price
            </label>
            <label htmlFor="highest-price">
              <input type="radio" name="price" id="highest-price" />
              highest-price
            </label>
          </article>
        }
      </div>
      {param &&
      <div className='filter-cont__filter'>
        <h1 className='font-primary'>Search: {param}</h1>
      </div>
      }
    </section>
  )
}

export default FilterCont