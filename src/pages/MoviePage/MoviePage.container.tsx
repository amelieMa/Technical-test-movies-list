import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { BASE_URL } from '../../app/App.constants';
import { MoviePageComponent } from './MoviePage.component';
import { useMovieSelector, useFetchMovie } from '../../redux/movies/movies.store';

export const ROUTE = `${BASE_URL}/movie/:id`;

export const MoviePage = () => {
  const { id } = useParams();

  const movie = useMovieSelector();
  const fetchMovie = useFetchMovie();

  useEffect(() => {
    if(id) {
      fetchMovie(id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <MoviePageComponent movie={movie}/>
  );
}