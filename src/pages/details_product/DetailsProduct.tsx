import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Header } from '@/components'

import { CardDetails } from './components'

function DetailsProduct () {

  return (
    <main className='details-product-layout'>
      <Header text='Details Product' />
      <CardDetails />
    </main>
  )
}

export default DetailsProduct