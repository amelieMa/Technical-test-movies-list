import { MOVIES_URL, API_KEY } from '../../app/App.constants'

export const fetchPopularMoviesURL = () => `${MOVIES_URL}/movie/popular?api_key=${API_KEY}`;

export const fetchMovieURL = (id: string) => `${MOVIES_URL}/movie/${id}?api_key=${API_KEY}`;
