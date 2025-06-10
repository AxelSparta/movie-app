import { useCallback, useEffect, useState } from 'react'
import { fetchMovies } from '../services/movies'
import type { ErrorMovies, Movie } from '../types/types'
import { useDebounce } from './useDebounce'

export function useMovies () {
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<ErrorMovies>({
    message: '',
    error: false
  })
  const [query, setQuery] = useState('')
  const [actualPage, setActualPage] = useState(1)
  const debouncedQuery = useDebounce(query, 300)
  const [totalPages, setTotalPages] = useState(0)

  const searchMovies = useCallback(
    (page?: number) => {
      setLoading(true)
      fetchMovies(page || actualPage, debouncedQuery)
        .then(data => {
          if (data.error) {
            setError({
              message: data.errorMessage,
              error: data.error
            })
          } else {
            setMovies(data.results)
            setTotalPages(data.totalPages)
          }
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [actualPage, debouncedQuery]
  )

  useEffect(() => {
    // En el caso de que se realice una búsqueda, se debe mostrar la página 1
    setActualPage(1)
    searchMovies(1)
  }, [debouncedQuery])

  useEffect(() => {
    searchMovies()
  }, [actualPage])

  return {
    movies,
    loading,
    error,
    query,
    setQuery,
    setActualPage,
    totalPages,
    actualPage
  }
}
