export interface Movie {
  id: string;
  adult: boolean;
  backdrop_path: string;
  poster_path: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
}

export interface MoviesState {
  loading: boolean,
  movie: Movie | null,
  movies: Movie[] | null,
  error: string | null
}
