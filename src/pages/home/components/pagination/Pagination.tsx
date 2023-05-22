import { Query } from '@/models'

import './pagination.sass'

interface PaginationProps {
  page: number
  limit: number
  total: number
  setQueryParams: (query: Query.search | Query.page, queryValue: string) => void
}

function Pagination ({ total, limit, page, setQueryParams }: PaginationProps) {

  const pages = Array.from({  length: total / limit }, (_, index) => index)
  const lastPage = pages[pages.length - 1]
  const nextPage = page + 1
  const previewPage = page - 1

  const setPage = (newPage: number) => {
    setQueryParams(Query.page, newPage.toString())
  }

  return (
    <section className='pagination'>
      <button
        onClick={() => setPage(previewPage)}
        disabled={page === 0}
        className='pagination__button-arrow text-2xl medium font-primary '
      >
        {'<'}
      </button>
      {pages.map(num =>
        <button
          key={num}
          onClick={() => setPage(num)}
          disabled={num === page}
          className='pagination__button-pag text-2xl medium font-primary '
        >
          {num + 1}
        </button>
      )}
      <button
        onClick={() => setPage(nextPage)}
        disabled={lastPage === page}
        className='pagination__button-arrow font-primary text-2xl medium'
      >
        {'>'}
      </button>
    </section>
  )
}

export default Pagination