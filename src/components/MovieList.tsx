import type { Movie } from '../types/types'

export function MovieList ({ moviesList }: { moviesList: Movie[] }) {
  return (
    <div>
      <h2 className='text-2xl font-bold'>Películas</h2>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {moviesList.map(movie => (
          <div key={movie.id} className='rounded-lg shadow-lg p-4'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h3 className='text-lg font-semibold'>{movie.title}</h3>
            <p className=''>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
