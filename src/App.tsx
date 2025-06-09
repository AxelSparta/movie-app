import { MovieList } from './components/MovieList'
import { ToggleTheme } from './components/ToggleTheme'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies, error, loading } = useMovies()
  return (
    <>
      <ToggleTheme />
      <div className='container p-2 mx-auto'>
        <img className='mx-auto' src='/hero.png' alt='Hero poster' />
        <h1 className='text-3xl sm:text-4xl font-extrabold text-center'>
          Encuentra todas tus{' '}
          <span className='bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text text-wrap'>películas favoritas</span>
        </h1>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error.error ? (
        <p>{error.message}</p>
      ) : (
        <MovieList moviesList={movies} />
      )}
    </>
  )
}

export default App
