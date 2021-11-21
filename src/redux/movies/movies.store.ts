import { useSelector, useDispatch } from 'react-redux'
import { get } from 'lodash-es'

import { fetchPopularMovies, fetchMovie } from './movies.thunk';
import { Movie } from './movies.types';

export const initiatialMoviesStore = {
  movie: null,
  movies: null,
  loading: false
}

export const getMovie = (state: any) => get(state, 'movie');
export const getMovies = (state: any) => get(state, 'movies');
export const getLoading = (state: any) => get(state, 'loading');

export function useMoviesSelector(): Movie[] | null {
  return useSelector((state: any) => getMovies(state.movies));
}

export function useMoviesLoadingSelector(): boolean {
  return useSelector((state: any) => getLoading(state.movies));
}

export function useMovieSelector(): Movie | null {
  return useSelector((state: any) => getMovie(state.movies));
}

export function useFetchMovies(): () => void {
  const dispatch = useDispatch()
  return () => dispatch(fetchPopularMovies());
}

export function useFetchMovie(): (id: string) => void {
  const dispatch = useDispatch()
  return (id: string) => dispatch(fetchMovie(id));
}
