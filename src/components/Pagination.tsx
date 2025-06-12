import { NextIcon } from '../icons/Next'
import { PrevIcon } from '../icons/Prev'

export function Pagination ({
  totalPages,
  actualPage,
  setActualPage
}: {
  totalPages: number
  actualPage: number
  setActualPage: React.Dispatch<React.SetStateAction<number>>
}) {
  const goToPrevPage = () => {
    if (actualPage === 1) return
    setActualPage(prevPage => prevPage - 1)
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }
  const goToNextPage = () => {
    if (actualPage === totalPages) return
    setActualPage(prevPage => prevPage + 1)
    window.scrollTo({ top: 500, behavior: 'smooth' })
  }
  return (
    <div className='flex gap-2 justify-center py-10 items-center'>
      <button
        type='button'
        onClick={goToPrevPage}
        disabled={actualPage === 1}
        className='p-2 border rounded cursor-pointer hover:scale-110 transition-transform'
      >
        <PrevIcon />
      </button>
      <span>{actualPage}</span>
      <button
        type='button'
        onClick={goToNextPage}
        disabled={actualPage === totalPages}
        className='p-2 border rounded cursor-pointer hover:scale-110 transition-transform'
      >
        <NextIcon />
      </button>
    </div>
  )
}
