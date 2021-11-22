import { renderWithStore } from '../../../__tests__/helpers';
import { MoviesListComponent } from '../MoviesList.component';
import { moviesMock } from '../../../__mock__/movies.mocks';

describe('MoviesList.component', () => {
  it('renders Skeleton', () => {
    const { container } = renderWithStore(<MoviesListComponent movies={moviesMock} loading={true} />);

    const skeletons = container.querySelector(".skeleton-grid-movies");
    expect(skeletons).toBeDefined();
  });

  it('renders Empty', () => {
    const { getByText } = renderWithStore(<MoviesListComponent movies={[]} loading={false} />);

    const description = getByText(/Aucun film trouvé/);
    expect(description).toBeDefined();
  });

  it('renders MovieItem', () => {
    const { getByAltText } = renderWithStore(<MoviesListComponent movies={moviesMock} loading={false} />);

    const imageMovie = getByAltText(moviesMock[0].title);
    expect(imageMovie).toBeDefined();
  });
});
