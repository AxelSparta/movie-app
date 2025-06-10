import { StarIcon } from '../icons/Star'
import type { Movie } from '../types/types'

export function MovieCard ({ movie }: { movie: Movie }) {
  return (
    <div className='rounded-2xl p-6 bg-gray-200 dark:bg-gray-900'>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/no-movie.png'}
        alt={movie.title}
        className='mx-auto w-full h-auto object-contain'
      />
      <h3 className='text-xl my-2 font-bold'>{movie.title}</h3>
      <p className='text-sm flex items-center gap-2'>
        <StarIcon className='size-4 text-amber-400' />
        <span className='font-bold'>{movie.vote_average.toFixed(1)}</span>
        •
        <span className=''>{movie.release_date.split('-')[0]}</span>
        •
        <span className=''>{movie.original_language}</span>
      </p>
    </div>
  )
}
