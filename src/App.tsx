import { MovieList } from './components/MovieList'
import { ToggleTheme } from './components/ToggleTheme'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies, error, loading } = useMovies()
  return (
    <>
    <ToggleTheme />
      <h1 className='text-3xl font-bold underline text-center'>Movie App</h1>
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
