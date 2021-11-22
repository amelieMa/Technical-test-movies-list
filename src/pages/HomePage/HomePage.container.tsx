import { useEffect, useState } from 'react';

import { BASE_URL } from '../../app/App.constants';
import { HomePageComponent } from './HomePage.component';
import { useFetchPopularMovies, useMoviesLoadingSelector, useMoviesSelector, useFetchSearchMovies } from '../../redux/movies/movies.store';

export const ROUTE = BASE_URL;

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const movies = useMoviesSelector();
  const loading = useMoviesLoadingSelector();
  const fetchPopularMovies = useFetchPopularMovies();
  const fetchSearchMovies = useFetchSearchMovies();

  useEffect(() => {
    if(!searchTerm) {
      return fetchPopularMovies()
    }
    return fetchSearchMovies(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  const onSearch = (value: string) => {
    return setSearchTerm(!value ? null : value)
  }

  return (
    <HomePageComponent movies={movies} loading={loading} onSearch={onSearch} searchTerm={searchTerm} />
  )
};