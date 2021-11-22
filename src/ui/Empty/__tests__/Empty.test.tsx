import { render } from '@testing-library/react';

import { Empty } from '../Empty.component';

const imageExample = <img src="test" alt="test" data-testid="imageExample" />;

describe('Empty.component', () => {
  it('renders the description and the image', () => {
    const { getByText, getByTestId } = render(<Empty description={"Oups"} image={imageExample} />);

    const description = getByText(/Oups/);
    const image = getByTestId(/imageExample/);

    expect(description).toBeDefined();
    expect(image).toBeDefined();
  });
});
