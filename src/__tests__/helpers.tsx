import { Provider } from 'react-redux';
import { Store } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render } from '@testing-library/react';

import { store as appStore } from '../app/AppStore';


export interface StoreMockElements {
  store: Store;
  history: MemoryHistory;
  dispatchSpy: any;
}

export function buildStoreMock(props: Partial<StoreMockElements> = {}): StoreMockElements {
  const history = props.history || createMemoryHistory();
  const store = props.store || appStore;
  const dispatchSpy = jest.spyOn(store, 'dispatch');

  return { history, store, dispatchSpy };
}

export function renderWithStore(children: React.ReactNode, storeParam?: Store) {
  const { store, history, dispatchSpy } = buildStoreMock({ store: storeParam });
  const renderResult = render(
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>,
  );
  return { ...renderResult, store, history, dispatchSpy };
}

delete window.matchMedia
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
})