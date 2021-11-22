import { fireEvent } from '@testing-library/react';

import { renderWithStore } from '../../../__tests__/helpers';
import { MovieItem } from '../MovieItem.component';
import { movieMock } from '../../../__mock__/movies.mocks';

describe('MovieItem.component', () => {
  it('renders image', () => {
    const { getByAltText, container } = renderWithStore(<MovieItem movie={movieMock} />);

    const imageMovie = getByAltText(movieMock.title);
    const hoverTitle = container.querySelector(".hoverDetails");

    expect(imageMovie).toBeDefined();
    expect(hoverTitle).toBeNull();
  });

  it('renders image and title', () => {
    const { container, getByAltText } = renderWithStore(<MovieItem movie={movieMock} />);

    const imageMovie = getByAltText(movieMock.title);
    fireEvent.mouseOver(imageMovie);
    const hoverTitle = container.querySelector(".hoverDetails");

    expect(imageMovie).toBeDefined();
    expect(hoverTitle).toBeDefined();
  });

  it('renders only image', () => {
    const { container, getByAltText } = renderWithStore(<MovieItem movie={movieMock} />);

    const imageMovie = getByAltText(movieMock.title);
    fireEvent.mouseLeave(imageMovie);
    const hoverTitle = container.querySelector(".hoverDetails");

    expect(imageMovie).toBeDefined();
    expect(hoverTitle).toBeNull();
  });
});
