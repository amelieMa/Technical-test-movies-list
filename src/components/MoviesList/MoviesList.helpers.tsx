import { Skeleton } from 'antd'
import { range } from 'lodash-es';

export const GridSkeleton = () => (
  <div className="skeleton-grid-movies">
    {range(20).map((_, index) => (
      <Skeleton.Input key={`skeleton-grid-movies-${index}`} style={{ width: 100, height: 200, margin: 10 }} active={true} />
    ))}
  </div>
)

export const SearchIcon = <span className="material-icons" style={{ fontSize: '48px' }}>search</span>;
