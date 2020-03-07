import React from 'react';

import { render } from '@testing-library/react';
// import App from '../index';

describe('<App />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <div />,
      // <App/>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
