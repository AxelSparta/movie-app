import type { Movie } from '../types/types'
import { MovieCard } from './MovieCard'

export function MovieList ({ moviesList }: { moviesList: Movie[] }) {
  return (
    <div className='container mx-auto p-6'>
      <h2 className='text-2xl font-bold text-wrap'>Películas</h2>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {moviesList.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  )
}
