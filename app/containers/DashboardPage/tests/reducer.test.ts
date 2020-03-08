import dashboardPageReducer, { initialState } from '../reducer';
// import { someAction } from '../actions';
import { DashboardPageState } from '../types';

describe('dashboardPageReducer', () => {
  let state: DashboardPageState;
  beforeEach(() => {
    state = { ...initialState };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(dashboardPageReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  /**
   * Example state change comparison
   *
   * it('should handle the someAction action correctly', () => {
   *   const expectedResult = {
   *     loading = true;
   *   );
   *
   *   expect(appReducer(state, someAction())).toEqual(expectedResult);
   * });
   */
});
