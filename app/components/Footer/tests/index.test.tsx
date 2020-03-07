import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import { render } from '@testing-library/react';
import Footer from '../index';
import configureStore from '../../../configureStore';
import history from '../../../utils/history';

describe('<Footer />', () => {
  let store;

  beforeAll(() => {
    store = configureStore({}, history);
  });

  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      // tslint:disable-next-line: jsx-wrap-multiline
      <Provider store={store}>
        <IntlProvider locale="en">
          <Footer />
        </IntlProvider>
      </Provider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
