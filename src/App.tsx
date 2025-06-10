import { MovieList } from './components/MovieList'
import { Pagination } from './components/Pagination'
import { Spinner } from './components/Spinner'
import { ToggleTheme } from './components/ToggleTheme'
import { useMovies } from './hooks/useMovies'
import { SearchIcon } from './icons/Search'

function App () {
  const {
    movies,
    error,
    loading,
    setQuery,
    totalPages,
    actualPage,
    setActualPage
  } = useMovies()
  return (
    <>
      <ToggleTheme />
      <div className='container p-2 mx-auto'>
        <img className='mx-auto' src='/hero.png' alt='Hero poster' />
        <h1 className='text-3xl sm:text-4xl font-extrabold text-center'>
          Encuentra todas tus{' '}
          <span className='bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text text-wrap'>
            películas favoritas
          </span>
        </h1>
      </div>
      <form
        action=''
        onSubmit={e => e.preventDefault()}
        className='flex justify-center'
      >
        <input
          type='search'
          name='search'
          placeholder='Avengers, The Hulk, Spiderman...'
          className='w-96 p-2 border rounded-l-xl border-r-0'
          onChange={e => setQuery(e.target.value)}
        />
        <button
          type='submit'
          className='p-2 border rounded-tr-xl rounded-br-xl hover:bg-slate-200 cursor-pointer dark:hover:bg-slate-800'
        >
          <SearchIcon />
        </button>
      </form>
      {loading ? (
        <Spinner />
      ) : error.error ? (
        <p>{error.message}</p>
      ) : (
        <>
          <MovieList moviesList={movies} />
          <Pagination
            totalPages={totalPages}
            actualPage={actualPage}
            setActualPage={setActualPage}
          />
        </>
      )}
    </>
  )
}

export default App
