import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AppComponent } from './App.component';
import { store } from './AppStore'

import 'antd/dist/antd.less'

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppComponent />
      </Router>
    </Provider>
  );
}
