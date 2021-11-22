import { render, fireEvent } from '@testing-library/react';

import { SearchInput } from '../SearchInput.component';

describe('SearchInput.component', () => {
  it('renders input with placeholder', () => {
    const { getAllByPlaceholderText } = render(<SearchInput placeholder="my placeholder" onSearch={jest.fn()} value={null} />);

    const placeholder = getAllByPlaceholderText(/placeholder/);

    expect(placeholder).toHaveLength(1);
  });

  it('changes input value', () => {
    const { getByPlaceholderText } = render(<SearchInput placeholder="my placeholder" onSearch={jest.fn()} value={null} />);

    const input = getByPlaceholderText(/placeholder/);
    fireEvent.change(input, { target: { value: 'search' } });
    expect(input).toHaveValue('search');
  });
});
