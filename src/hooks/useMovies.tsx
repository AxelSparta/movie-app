import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/movies'
import type { ErrorMovies, Movie } from '../types/types'

export function useMovies () {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorMovies>({
    message: '',
    error: false
  })
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  useEffect(() => {
    setLoading(true)
    fetchMovies(page, query)
      .then(data => {
        if (data.error) {
          setError({
            message: data.errorMessage,
            error: data.error
          })
        } else {
          setMovies(data.results)
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, query])

  return {
    movies,
    loading,
    error,
    query,
    setQuery,
    setPage
  }
}
