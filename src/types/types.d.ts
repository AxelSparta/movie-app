export interface Movie {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface ErrorMovies {
  message: string
  error: boolean
}

export interface MovieResponse {
  error: boolean
  results: Movie[]
  errorMessage: string
  totalPages: number
}

export interface MovieDetail {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export interface Genre {
  id: number
  name: string
}

export interface ProductionCompany {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export interface ProductionCountry {
  iso_3166_1: string
  name: string
}

export interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export type MovieDetailResponse =
  | {
      error: false
      errorMessage: ''
      movieDetail: MovieDetail
    }
  | {
      error: true
      errorMessage: string
      movieDetail: null
    }

export interface MovieVideos {
  id: number
  results: Result[]
}

export interface Result {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}

export type MovieVideosResponse =
  | {
      error: false
      errorMessage: ''
      movieVideos: MovieVideos
    }
  | {
      error: true
      errorMessage: string
      movieVideos: null
    }

