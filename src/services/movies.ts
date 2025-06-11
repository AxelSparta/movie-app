import type { MovieDetailResponse, MovieResponse } from '../types/types'

const API_URL = 'https://api.themoviedb.org/3'
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_READ_TOKEN}`
  }
}
// SI EXISTE QUERY /search/movie?query=${query}&language=es-ES&page=1
// SI NO EXISTE QUERY /discover/movie?language=es-ES&page=1
export const fetchMovies = async (
  page: number,
  query = ''
): Promise<MovieResponse> => {
  try {
    let response: Response
    if (query) {
      response = await fetch(
        `${API_URL}/search/movie?query=${encodeURIComponent(
          query
        )}&language=es-MX&page=${page}`,
        options
      )
    } else {
      response = await fetch(
        `${API_URL}/discover/movie?language=es-MX&page=${page}`,
        options
      )
    }
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return {
      error: false,
      results: data.results,
      errorMessage: '',
      totalPages: data.total_pages
    }
  } catch {
    return {
      error: true,
      results: [],
      errorMessage: 'Error al obtener películas',
      totalPages: 0
    }
  }
}

export const fetchMovieDetail = async (
  id: number
): Promise<MovieDetailResponse> => {
  try {
    const response = await fetch(
      `${API_URL}/movie/${id}?language=es-MX`,
      options
    )
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    return {
      error: false,
      movieDetail: data,
      errorMessage: ''
    }
  } catch {
    return {
      error: true,
      errorMessage: 'Error al obtener película',
      movieDetail: null
    }
  }
}
