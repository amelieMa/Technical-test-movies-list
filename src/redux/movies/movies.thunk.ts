import { fetchPopularMoviesURL } from './movies.api';
import {fetchAllMoviesRequest, fetchAllMoviesSuccess, fetchAllMoviesFailure} from './movies.actions';

export const fetchAllMovies = () => (dispatch: (action: any) => void) => {
  dispatch(fetchAllMoviesRequest())

  fetch(fetchPopularMoviesURL())
    .then(res => res.json())
    .then(res => {
      if (res.error) {
        throw res.error
      }
      return dispatch(fetchAllMoviesSuccess(res.results))
    })
    .catch(error => {
      dispatch(fetchAllMoviesFailure(error))
    })
}
