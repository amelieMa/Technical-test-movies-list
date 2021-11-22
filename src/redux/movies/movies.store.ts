import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash-es'

import { AppStoreState } from '../../app/AppStore';
import { fetchPopularMovies, fetchMovie, fetchSearchMovies } from './movies.thunk';
import { Movie, MoviesState } from './movies.types';

export const initiatialMoviesStore = {
  movie: null,
  movies: null,
  loading: false,
  error: null
}

export const getMovie = (state: MoviesState) => get(state, 'movie');
export const getMovies = (state: MoviesState) => get(state, 'movies');
export const getLoading = (state: MoviesState) => get(state, 'loading');

export function useMoviesSelector(): Movie[] | null {
  return useSelector((state: AppStoreState) => getMovies(state.movies));
}

export function useMoviesLoadingSelector(): boolean {
  return useSelector((state: AppStoreState) => getLoading(state.movies));
}

export function useMovieSelector(): Movie | null {
  return useSelector((state: AppStoreState) => getMovie(state.movies));
}

export function useFetchPopularMovies(): () => void {
  const dispatch = useDispatch()
  return () => dispatch(fetchPopularMovies());
}

export function useFetchSearchMovies(): (query: string) => void {
  const dispatch = useDispatch()
  return (query: string) => dispatch(fetchSearchMovies(query));
}

export function useFetchMovie(): (id: string) => void {
  const dispatch = useDispatch()
  return (id: string) => dispatch(fetchMovie(id));
}
