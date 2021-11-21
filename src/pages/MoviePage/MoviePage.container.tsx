import { BASE_URL } from '../../app/App.constants';
import { MoviePageComponent } from './MoviePage.component';

export const ROUTE = `${BASE_URL}/:id`;

export const MoviePage = () => {
  return (
    <MoviePageComponent />
  );
}