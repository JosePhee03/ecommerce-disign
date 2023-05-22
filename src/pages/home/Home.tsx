import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { Header } from '@/components'

import { FilterCont, ProductsCont, SearchCont } from './components'

import './home.sass'

const queryClient = new QueryClient()

function Home () {

  return (
    <main className='home-layout'>
      <Header variant='home' text='Shop' />
      <QueryClientProvider client={queryClient}>
        <SearchCont />
        <FilterCont />
        <ProductsCont />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </main>
  )
}

export default Home