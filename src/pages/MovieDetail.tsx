import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { Badge } from '../components/Badge'
import { Spinner } from '../components/Spinner'
import { PrevIcon } from '../icons/Prev'
import { StarIcon } from '../icons/Star'
import { fetchMovieDetail, fetchVideos } from '../services/movies'
import type { MovieDetail, MovieVideos } from '../types/types'
import { NotFoundPage } from './404'

export function MovieDetail () {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)
  const [movieVideos, setMovieVideos] = useState<MovieVideos | null>(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()
  useEffect(() => {
    fetchMovieDetail(Number(id))
      .then(data => setMovieDetail(data.movieDetail))
      .finally(() => setLoading(false))
    fetchVideos(Number(id)).then(data => setMovieVideos(data.movieVideos))
  }, [id])
  return (
    <>
      {loading ? (
        <Spinner />
      ) : movieDetail ? (
        <main className='container mx-auto p-6'>
          <nav>
            <NavLink
              to='/'
              className='inline-flex items-center gap-2 hover:underline hover:scale-110 transition-transform mb-6 cursor-pointer'
            >
              <PrevIcon /> Volver atrás
            </NavLink>
          </nav>
          <div className='flex flex-col gap-4 md:flex-row justify-between items-center flex-wrap'>
            <h1 className='text-4xl font-bold'>{movieDetail.title}</h1>
            <span className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
              {movieDetail.release_date.split('-')[0]} {'• '}
              {movieDetail.runtime}min {'• '}
              {movieDetail.original_language}
            </span>
            <Badge>
              <StarIcon className='text-amber-300' />{' '}
              {movieDetail.vote_average.toFixed(1)}/10 {'• '}
              {movieDetail.popularity.toFixed(1)}k
            </Badge>
          </div>
          <div className='py-6 flex flex-col justify-center items-center lg:flex-row lg:justify-between gap-6'>
            {movieDetail.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt={movieDetail.title}
                className='max-w-[302px] rounded-lg'
              />
            ) : (
              <img src='/no-movie.png' alt='No movie' className='max-w-[302px] rounded-lg' />
            )}
            {movieVideos && movieVideos.results.length > 0 && (
              <div className='relative w-full aspect-video max-h-[453px] max-w-[806.34px] rounded-lg overflow-hidden'>
                <iframe
                  className='w-full h-full'
                  src={`https://www.youtube.com/embed/${movieVideos.results[0].key}`}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
            )}
          </div>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Géneros</h3>
              <p className='flex flex-wrap gap-2'>{movieDetail.genres.map(genre => <Badge key={genre.id}>{genre.name}</Badge>)}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Sinopsis</h3>
              <p>{movieDetail.overview || 'No hay sinopsis disponible'}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Producción</h3>
              <p className='flex flex-wrap gap-2'>
                {movieDetail.production_companies.map(company => <Badge key={company.id}>{company.name}</Badge>)}
              </p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Estátus</h3>
              <p>{movieDetail.status}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Idiomas</h3>
              <p>
                {movieDetail.spoken_languages
                  .map(language => language.name)
                  .join(', ')}
              </p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Fecha de lanzamiento</h3>
              <p>{movieDetail.release_date}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Presupuesto</h3>
              <p>{movieDetail.budget ? `$${(movieDetail.budget / 1000000).toFixed(1)}M` : 'NaN'}</p>
            </div>
            <div className='flex flex-col md:flex-row md:items-center gap-4 max-w-5xl'>
              <h3 className='text-lg font-bold'>Recaudación</h3>
              <p>{movieDetail.revenue ? `$${(movieDetail.revenue / 1000000).toFixed(1)}M` : 'NaN'}</p>
            </div>
          </div>
        </main>
      ) : (
        <NotFoundPage />
      )}
    </>
  )
}
