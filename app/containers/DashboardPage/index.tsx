/*
 *
 * DashboardPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import MainLayout from 'components/MainLayout';
import makeSelectDashboardPage from './selectors';
import reducer from './reducer';
import saga from './saga';

// const stateSelector = createStructuredSelector({
//   dashboardPage: makeSelectDashboardPage(),
// });

interface Props {}

const DashboardPage = () => {
  // Warning: Add your key to RootState in types/index.d.ts file
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  return (
    <div>
      <Helmet>
        <title>DashboardPage</title>
        <meta name="description" content="DashboardPage of the application." />
      </Helmet>
      <MainLayout></MainLayout>
    </div>
  );
};

export default memo(DashboardPage);
