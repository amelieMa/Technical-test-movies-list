import { Switch } from 'antd'

import { ThemeContext } from '../../contexts/Theme.context'
import { SwitchThemeWrapper } from './SwitchTheme.wrapper'

export const SwitchTheme = () => (
  <ThemeContext.Consumer>
    {({ theme, setTheme }) => {
      const checked = theme === 'light' ? false : true

      return (
        <SwitchThemeWrapper>
          <span className="material-icons">light_mode</span>
          <Switch defaultChecked onChange={setTheme} checked={checked} size="small" />
          <span className="material-icons">mode_night</span>
        </SwitchThemeWrapper>
      )
    }}
  </ThemeContext.Consumer>
)
