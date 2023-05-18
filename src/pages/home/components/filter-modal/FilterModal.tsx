import { Dispatch, FormEvent, SetStateAction } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'

import { CloseIcon, DoneIcon, Select } from '@/components'
import { CATEGORIES } from '@/constant'

import './filter_modal.sass'

function FilterModal ({ setShowModal }: {setShowModal: Dispatch<SetStateAction<boolean>>}) {
  const navigate = useNavigate()

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    const { category } = Object.fromEntries(formData)
    navigate(`/${category}`)
    setShowModal(false)
  }

  return (
    <>
      {createPortal(<div onClick={() => setShowModal(false)} className='backdrop-modal'></div>, document.getElementById('portal') as HTMLElement)}
      <article className='modal bg-body'>
        <form onSubmit={handleOnSubmit} className='modal__form'>
          <header className='modal__header'>
            <button type='button' title='close' onClick={() => setShowModal(false)} className='modal__header__button close'>
              <CloseIcon className='modal__header__button__icon-close icon' />
            </button>
            <h2 className='title-text medium font-primary'>Filter</h2>
            <button type='submit' title='done' className='modal__header__button done'>
              <DoneIcon className='modal__header__button__icon-done icon' />
            </button>
          </header>
          <div className='select-layout'>
            <label htmlFor="select-category" className='text-navy-500 text-lg'>Categories</label>
            <Select textSize='text-md' selected='Select -- Category' options={Object.values(CATEGORIES)} name='category' id='select-category' />
          </div>
        </form>
      </article>
    </>
  )
}

export default FilterModal