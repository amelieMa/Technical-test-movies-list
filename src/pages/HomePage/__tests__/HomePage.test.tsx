import { renderWithStore, buildStoreMock } from '../../../__tests__/helpers';
import { HomePage } from '../HomePage.container';

describe('HomePage', () => {

  describe('HomePage.container', () => {
    const { store } = buildStoreMock();

    it('renders an input and empty cpomponent', () => {
      const { getByPlaceholderText, getByText } = renderWithStore(<HomePage />, store);

      const input = getByPlaceholderText(/Rechercher un film/);
      const emptyComponent = getByText(/Aucun film trouvé/);

      expect(input).toBeDefined();
      expect(emptyComponent).toBeDefined();
    });
  });
});
