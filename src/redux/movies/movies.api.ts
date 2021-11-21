import { MOVIES_URL, API_KEY } from '../../app/App.constants'

export const fetchPopularMoviesURL = () => `${MOVIES_URL}/movie/popular?api_key=${API_KEY}`;
