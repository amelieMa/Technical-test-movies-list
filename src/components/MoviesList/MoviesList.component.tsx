import { Skeleton } from 'antd'
import { range } from 'lodash-es';

import { MoviesListWrapper } from './MoviesList.wrapper';
import { Movie } from './Movie.component';
import { Empty } from '../../ui/Empty/Empty.component';

const GridSkeleton = () => (
  <div className="skeleton-grid-movies">
    {range(20).map((_, index) => (
      <Skeleton.Input key={`skeleton-grid-movies-${index}`} style={{ width: 100, height: 200, margin: 10 }} active={true} />
    ))}
  </div>
)

const searchIcon = <span className="material-icons" style={{ fontSize: '48px' }}>search</span>;

export const MoviesListComponent = ({movies, loading}: any) => {
  if (loading) {
    return <GridSkeleton />
  }

  if (!movies) {
    return <Empty description={"Oups ! Aucun film trouvé."} image={searchIcon} />;
  }

  return (
    <MoviesListWrapper>
      {movies.map((movie: any) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </MoviesListWrapper>
  );
}