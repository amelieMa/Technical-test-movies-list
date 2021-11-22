import { MoviesListComponent } from '../../components/MoviesList/MoviesList.component'
import { Movie } from '../../redux/movies/movies.types';
import { SearchInput } from '../../ui/SearchInput/SearchInput.component';

interface HomePageComponentProps {
  movies: Movie[] | null,
  loading: boolean, 
  onSearch: (value: string) => void,
  searchTerm: string | null;
}

export const HomePageComponent = ({movies, loading, onSearch, searchTerm}: HomePageComponentProps) => (
  <>
    <SearchInput placeholder="Rechercher un film" onSearch={onSearch} value={searchTerm} />
    <MoviesListComponent data-testid="MoviesListComponent" movies={movies} loading={loading} />
  </>
);