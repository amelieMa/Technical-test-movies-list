import { renderWithStore } from '../../../__tests__/helpers';
import { Layout } from '../Layout.component';

describe('Layout.component', () => {
  it('renders layoutComponent and header component', () => {
    const { container, getByTestId, getByText } = renderWithStore(<Layout><h1>My Test</h1></Layout>);
    
    const header = container.querySelectorAll("header");
    const layoutComponent = getByTestId(/layout/);
    const children = getByText(/My Test/);

    expect(header).toHaveLength(1);
    expect(layoutComponent).toBeDefined();
    expect(children).toBeDefined();
  });
});
