import { renderWithStore } from '../../../__tests__/helpers';
import { Header, BackToHome } from '../Header.component';

describe('Header.component', () => {
  it('renders header and switch', () => {
    const { container, getByRole } = renderWithStore(<Header  />);

    const header = container.querySelectorAll("header");
    const switchInput = getByRole("switch");

    expect(header).toHaveLength(1);
    expect(switchInput).toBeDefined();
  });

  it('renders BackToHome', () => {
    const { getByText } = renderWithStore(<BackToHome  />);

    const iconBack = getByText("chevron_left");

    expect(iconBack).toBeDefined();
  });
});
