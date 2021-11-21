import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider as ThemeStyledComponent } from 'styled-components';

import { GlobalStyle, lightTheme, darkTheme } from './App.wrapper';
import { AppComponent } from './App.component';
import { ThemeProvider, ThemeContext } from '../contexts/Theme.context';

import { store } from './AppStore'

import 'antd/dist/antd.less'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider localStorage={window.localStorage.getItem('theme') || 'light'} >
          <ThemeContext.Consumer>
            {({ theme }: { theme: string }) => (
              <ThemeStyledComponent theme={theme === 'dark' ? darkTheme : lightTheme}>
                <AppComponent />
                <GlobalStyle />
              </ThemeStyledComponent>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
