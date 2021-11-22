import { Movie } from './movies.types'

const MOVIES_NAMESPACE = 'MOVIES'

export const FETCH_POPULAR_MOVIES_REQUEST = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_REQUEST`;
export const FETCH_POPULAR_MOVIES_SUCCESS = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_SUCCESS`;
export const FETCH_POPULAR_MOVIES_ERROR = `${MOVIES_NAMESPACE}/FETCH_POPULAR_MOVIES_ERROR`;

export const FETCH_MOVIE_REQUEST = `${MOVIES_NAMESPACE}/FETCH_MOVIE_REQUEST`;
export const FETCH_MOVIE_SUCCESS = `${MOVIES_NAMESPACE}/FETCH_MOVIE_SUCCESS`;
export const FETCH_MOVIE_ERROR = `${MOVIES_NAMESPACE}/FETCH_MOVIE_ERROR`;

export const FETCH_SEARCH_MOVIES_REQUEST = `${MOVIES_NAMESPACE}/FETCH_SEARCH_MOVIES_REQUEST`;
export const FETCH_SEARCH_MOVIES_SUCCESS = `${MOVIES_NAMESPACE}/FETCH_SEARCH_MOVIES_SUCCESS`;
export const FETCH_SEARCH_MOVIES_ERROR = `${MOVIES_NAMESPACE}/FETCH_SEARCH_MOVIES_ERROR`;

export const fetchPopularMoviesRequest = () => ({
  type: FETCH_POPULAR_MOVIES_REQUEST
})

export const fetchPopularMoviesSuccess = (movies: Movie[]) => ({
  type: FETCH_POPULAR_MOVIES_SUCCESS,
  payload: movies
})

export const fetchPopularMoviesFailure = (error: string | null) => ({
  type: FETCH_POPULAR_MOVIES_ERROR,
  payload: error
})

export const fetchMovieRequest = () => ({
  type: FETCH_MOVIE_REQUEST
})

export const fetchMovieSuccess = (movie: Movie) => ({
  type: FETCH_MOVIE_SUCCESS,
  payload: movie
})

export const fetchMovieFailure = (error: string | null) => ({
  type: FETCH_MOVIE_ERROR,
  payload: error
})

export const fetchSearchMoviesRequest = () => ({
  type: FETCH_SEARCH_MOVIES_REQUEST
})

export const fetchSearchMoviesSuccess = (movies: Movie[]) => ({
  type: FETCH_SEARCH_MOVIES_SUCCESS,
  payload: movies
})

export const fetchSearchMoviesFailure = (error: string | null) => ({
  type: FETCH_SEARCH_MOVIES_ERROR,
  payload: error
})