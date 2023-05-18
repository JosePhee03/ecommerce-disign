import { useState } from 'react'
import { Link } from 'react-router-dom'

import { CloseIcon, FilterIcon } from '@/components'
import { useSearchProduct } from '@/hooks'

import { FilterModal } from '../filter-modal'
import './filter_cont.sass'

function FilterCont () {
  const [ showModal, setShowModal ] = useState<boolean>(false)
  const { queryParam, category } = useSearchProduct()

  return (
    <section className='filter-cont'>
      <h2 className='text-3xl medium font-primary'>Products</h2>
      <div className='modal-cont'>
        <button onClick={() => setShowModal(true)} className='filter-cont__button'>
          <h6 className='text-sm'>Filters</h6>
          <FilterIcon className='filter-cont__button__icon' />
        </button>
        {showModal && <FilterModal setShowModal={setShowModal} />}
      </div>
      <div className='filter-cont__description'>
        {queryParam &&
          <div className='filter-cont__filter'>
            <h1 className='font-primary text-lg'>Search results for "{queryParam}"</h1>
          </div>
        }
        {category &&
          <div className='tag'>
            <h6 className='tag__text text-md medium'>{category}</h6>
            <Link to={'/'} className='tag__button'>
              <CloseIcon className='tag__button__icon' />
            </Link>
          </div>
        }
      </div>
    </section>
  )
}

export default FilterCont