import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { PrevIcon } from '../icons/Prev'
import { StarIcon } from '../icons/Star'
import { fetchMovieDetail, fetchVideos } from '../services/movies'
import type { MovieDetail, MovieVideos } from '../types/types'

export function MovieDetail () {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)
  const [movieVideos, setMovieVideos] = useState<MovieVideos | null>(null)
  const { id } = useParams()
  useEffect(() => {
    fetchMovieDetail(Number(id)).then(data => setMovieDetail(data.movieDetail))
    fetchVideos(Number(id)).then(data => setMovieVideos(data.movieVideos))
  }, [id])
  return (
    <>
      {movieDetail ? (
        <main className='container mx-auto p-6'>
          <nav>
            <NavLink
              to='/'
              className='inline-flex items-center gap-2 hover:underline hover:scale-110 transition-transform mb-6 cursor-pointer'
            >
              <PrevIcon /> Volver atrás
            </NavLink>
          </nav>
          <div className='flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>{movieDetail.title}</h1>
            <span className='flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400'>
              {movieDetail.release_date.split('-')[0]} {'• '}
              {movieDetail.runtime}min {'• '}
              {movieDetail.original_language}
            </span>
            <span className='flex items-center gap-2 text-sm rounded p-2 bg-slate-100 dark:bg-slate-800'>
              <StarIcon className='text-amber-300' />{' '}
              {movieDetail.vote_average.toFixed(1)}/10 {'• '}
              {movieDetail.popularity.toFixed(1)}k
            </span>
          </div>
          <div className='py-6 flex items-start justify-around gap-6'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
              alt={movieDetail.title}
              className='max-w-[302px] rounded-lg'
            />
            {movieVideos && movieVideos.results.length > 0 && (
              <div className='relative w-full aspect-video max-h-[453px] max-w-[806.34px] mx-auto rounded-lg overflow-hidden'>
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
            <div>
              <p className='text-lg font-bold'>Géneros</p>
              <p>{movieDetail.genres.map(genre => genre.name).join(', ')}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Sinopsis</p>
              <p>{movieDetail.overview}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Producción</p>
              <p>
                {movieDetail.production_companies
                  .map(company => company.name)
                  .join(', ')}
              </p>
            </div>
            <div>
              <p className='text-lg font-bold'>Estátus</p>
              <p>{movieDetail.status}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Idiomas</p>
              <p>
                {movieDetail.spoken_languages
                  .map(language => language.name)
                  .join(', ')}
              </p>
            </div>
            <div>
              <p className='text-lg font-bold'>Fecha de lanzamiento</p>
              <p>{movieDetail.release_date}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Presupuesto</p>
              <p>{movieDetail.budget}</p>
            </div>
            <div>
              <p className='text-lg font-bold'>Recaudación</p>
              <p>{movieDetail.revenue}</p>
            </div>
          </div>
        </main>
      ) : (
        <p className='text-center text-xl font-bold'>
          No hay película para mostrar
        </p>
      )}
    </>
  )
}
