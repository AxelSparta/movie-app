import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { fetchMovieDetail } from '../services/movies'
import type { MovieDetail } from '../types/types'

export function MovieDetail () {
  const [movieDetail, setMovieDetail] = useState<MovieDetail | null>(null)
  const { id } = useParams()
  useEffect(() => {
    fetchMovieDetail(Number(id)).then(data => setMovieDetail(data.movieDetail))
  }, [id])
  return (
    <>
      {movieDetail ? (
        <div>
          <h1>{movieDetail.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            alt={movieDetail.title}
          />
        </div>
      ) : (
        <p>No hay película para mostrar</p>
      )}
    </>
  )
}