import { render } from '@testing-library/react';

import { IMAGE_URL } from '../../../app/App.constants';
import { renderWithStore, buildStoreMock } from '../../../__tests__/helpers';
import { MoviePage } from '../MoviePage.container';
import { MoviePageComponent } from '../MoviePage.component';
import { generateimageUrl } from '../MoviePage.constants';
import { movieMock } from '../../../__mock__/movies.mocks';

describe('MoviePage', () => {

  describe('MoviePage.container', () => {
    const { store } = buildStoreMock();

    it('renders Movie Page without movie', () => {
      const { container, getAllByText } = renderWithStore(<MoviePage />, store);

      const errorText = getAllByText(/Oulah !/);
      const Empty = container.querySelector('.ant-empty');

      expect(Empty).toBeDefined();
      expect(errorText).toHaveLength(1);
    });
  });

  describe('MoviePage.component', () => {
    it('renders Movie Page Component without movie', () => {
      const { container, getAllByText } = render(<MoviePageComponent movie={null} />);

      const errorText = getAllByText(/Oulah !/);
      const Empty = container.querySelector('.ant-empty');

      expect(Empty).toBeDefined();
      expect(errorText).toHaveLength(1);
    });

    it('renders Movie Page Component with movie', () => {
      const { container, getAllByTestId } = render(<MoviePageComponent movie={movieMock} />);

      const component = getAllByTestId(/moviePage/);
      const detailsColumn = container.querySelector('.detailsColumn');

      expect(component).toBeDefined();
      expect(detailsColumn).toBeDefined()
    });
  });

  describe('MoviePage.constant', () => {
    it('tests generateimageUrl return the good url', () => {
      const resultURl = generateimageUrl('test.jpg')

      expect(resultURl).toEqual(IMAGE_URL + 'test.jpg')
    });
  });
});
