import { Skeleton } from 'antd'
import { range } from 'lodash-es';

import { MoviesListWrapper } from './MoviesList.wrapper';
import { Movie } from './Movie.component';

const GridSkeleton = () => (
  <div className="skeleton-grid-movies">
    {range(20).map((_, index) => (
      <Skeleton.Input key={`skeleton-grid-movies-${index}`} style={{ width: 100, height: 200, margin: 10 }} active={true} />
    ))}
  </div>
)

export const MoviesListComponent = ({movies, loading}: any) => {
  if (loading) {
    return <GridSkeleton />
  }

  if (!movies) {
    return <p>vide</p>;
  }

  return (
    <MoviesListWrapper>
      {movies.map((movie: any) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MoviesListWrapper>
  );
}