import { ChevronDownIcon } from '@/components'

import './select.sass'

interface SelectProps {
  options: string[]
  name: string
  id: string
  selected: string
  textSize: string
  mini?: 'select-mini'
  tabIndex?: number
}

function Select ({ tabIndex = 0, options, name, id, selected, textSize, mini }: SelectProps) {
  return (
    <div className={`select-cont ${textSize}`}>
      <select tabIndex={tabIndex} title={`select ${name}`} className={`select-cont__input text-light-navy-500 bg-primary medium ${mini}`} name={name} id={id}>
        <option defaultValue={selected}>{selected}</option>
        {options.map(option =>
          <option value={option} key={option}>{option}</option>
        )
        }
      </select>
      <ChevronDownIcon className='select-cont__icon' />
    </div>
  )
}

export default Select