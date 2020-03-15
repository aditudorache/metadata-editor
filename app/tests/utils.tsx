import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {
  theme,
  ThemeProvider,
  MuiThemeProvider,
  StylesProvider,
} from 'styles/styled-components';

import configureStore from '../configureStore';
export const history = createMemoryHistory();
export const store = configureStore({}, history);

export const testActionCreator = (action, actionType, payload) => {
  const expected = {
    type: actionType,
    payload,
  };
  expect(action(payload)).toEqual(expected);
};

export const withAppContext = Component => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>{Component}</ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </ConnectedRouter>
  </Provider>
);
