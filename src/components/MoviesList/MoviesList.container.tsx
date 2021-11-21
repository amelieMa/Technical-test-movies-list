import { useEffect } from 'react';

import { BASE_URL } from '../../app/App.constants';
import { MoviesListComponent } from './MoviesList.component';
import { useFetchMovies, useMoviesLoadingSelector, useMoviesSelector } from '../../redux/movies/movies.store';

export const ROUTE = BASE_URL;

export const MoviesList = () => {
  const movies = useMoviesSelector();
  const loading = useMoviesLoadingSelector();
  const fetchAllMovies = useFetchMovies();

  useEffect(() => {
    fetchAllMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MoviesListComponent movies={movies} loading={loading} />
  );
}