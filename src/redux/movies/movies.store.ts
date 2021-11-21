import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash-es'

import { fetchAllMovies } from './movies.thunk';

export const initiatialMoviesStore = {
  movie: null,
  movies: null,
  loading: false
}

export const getMovies = (state: any) => get(state, 'movies');
export const getLoading = (state: any) => get(state, 'loading');

export function useMoviesSelector(): any {
  return useSelector((state: any) => getMovies(state.movies));
}

export function useMoviesLoadingSelector(): any {
  return useSelector((state: any) => getLoading(state.movies));
}

export function useFetchMovies() {
  const dispatch = useDispatch()
  return () => dispatch(fetchAllMovies());
}