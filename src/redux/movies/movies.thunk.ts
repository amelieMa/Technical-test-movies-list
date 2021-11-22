import { fetchPopularMoviesURL, fetchMovieURL, fetchSearchMoviesURL } from './movies.api';
import {
  fetchPopularMoviesRequest, 
  fetchPopularMoviesSuccess, 
  fetchPopularMoviesFailure,
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure,
  fetchSearchMoviesRequest,
  fetchSearchMoviesSuccess,
  fetchSearchMoviesFailure
} from './movies.actions';

export const fetchPopularMovies = () => (dispatch: (action: any) => void) => {
  dispatch(fetchPopularMoviesRequest())

  fetch(fetchPopularMoviesURL())
    .then(res => res.json())
    .then(res => {
      if (res.status_message) {
        throw res.status_message
      }
      return dispatch(fetchPopularMoviesSuccess(res.results))
    })
    .catch(error => {
      dispatch(fetchPopularMoviesFailure(error))
    })
}


export const fetchMovie = (id: string) => (dispatch: (action: any) => void) => {
  dispatch(fetchMovieRequest())

  fetch(fetchMovieURL(id))
    .then(res => res.json())
    .then(res => {
      if (res.status_message) {
        throw res.status_message
      }
      return dispatch(fetchMovieSuccess(res))
    })
    .catch(error => {
      dispatch(fetchMovieFailure(error))
    })
}


export const fetchSearchMovies = (query: string) => (dispatch: (action: any) => void) => {
  dispatch(fetchSearchMoviesRequest())

  fetch(fetchSearchMoviesURL(query))
    .then(res => res.json())
    .then(res => {
      if (res.status_message) {
        throw res.status_message
      }
      return dispatch(fetchSearchMoviesSuccess(res.results))
    })
    .catch(error => {
      dispatch(fetchSearchMoviesFailure(error))
    })
}
