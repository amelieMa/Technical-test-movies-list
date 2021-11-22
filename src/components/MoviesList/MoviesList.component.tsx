import { MoviesListWrapper } from './MoviesList.wrapper';
import { GridSkeleton, SearchIcon } from './MoviesList.helpers';
import { MovieItem } from '../MovieItem/MovieItem.component';
import { Empty } from '../../ui/Empty/Empty.component';
import { Movie } from '../../redux/movies/movies.types';

interface MoviesListProps {
  movies: Movie[] | null,
  loading: boolean
}

export const MoviesListComponent = ({ movies, loading }: MoviesListProps) => {
  if (loading) {
    return <GridSkeleton />
  }

  if (!movies || movies.length === 0) {
    return <Empty description={"Oups ! Aucun film trouvé."} image={SearchIcon} />;
  }

  return (
    <MoviesListWrapper>
      {movies.map((movie: Movie) => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </MoviesListWrapper>
  );
}