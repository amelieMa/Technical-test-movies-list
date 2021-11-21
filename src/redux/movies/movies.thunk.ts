import { fetchPopularMoviesURL, fetchMovieURL } from './movies.api';
import {
  fetchPopularMoviesRequest, 
  fetchPopularMoviesSuccess, 
  fetchPopularMoviesFailure,
  fetchMovieRequest,
  fetchMovieSuccess,
  fetchMovieFailure
} from './movies.actions';

export const fetchPopularMovies = () => (dispatch: (action: any) => void) => {
  dispatch(fetchPopularMoviesRequest())

  fetch(fetchPopularMoviesURL())
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error
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
      if (res.error) {
        throw res.error
      }
      return dispatch(fetchMovieSuccess(res))
    })
    .catch(error => {
      dispatch(fetchMovieFailure(error))
    })
}

