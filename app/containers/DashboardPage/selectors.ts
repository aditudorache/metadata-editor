import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboardPage state domain
 */

const selectDashboardPageDomain = (state: ApplicationRootState) =>
  state || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardPage
 */

const makeSelectDashboardPage = () =>
  createSelector(selectDashboardPageDomain, substate => substate);

export default makeSelectDashboardPage;
export { selectDashboardPageDomain };
