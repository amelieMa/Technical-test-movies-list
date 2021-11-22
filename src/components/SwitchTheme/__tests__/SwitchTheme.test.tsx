import { render } from '@testing-library/react';

import { SwitchTheme } from '../SwitchTheme.component';

describe('SwitchTheme.component', () => {
  it('renders switch and 2 icons', () => {
    const { getByRole, getByText } = render(<SwitchTheme  />);

    const switchInput = getByRole("switch");
    const iconLight = getByText(/light_mode/);
    const iconDark = getByText(/mode_night/);

    expect(switchInput).toBeDefined();
    expect(iconLight).toBeDefined();
    expect(iconDark).toBeDefined();
  });
});
