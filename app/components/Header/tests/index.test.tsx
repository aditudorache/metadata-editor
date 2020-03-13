import React from 'react';
import { render } from '@testing-library/react';

import { withAppContext } from 'tests/utils';
import Header from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const { container } = render(withAppContext(<Header />));
    expect(container.firstChild).toMatchSnapshot();
  });
});
