/*
 *
 * DashboardPage reducer
 *
 */

import ActionTypes from './constants';
import { DashboardPageState, DashboardPageActions } from './types';

export const initialState: DashboardPageState = {
  treeData: null,
  selectedNodeId: null,
  detailData: null,
};

function dashboardPageReducer(
  state = initialState,
  action: DashboardPageActions,
): DashboardPageState {
  switch (action.type) {
    case ActionTypes.NODE_SELECTED:
      return { ...state, selectedNodeId: action.payload };
    case ActionTypes.DETAIL_DATA_CHANGED:
      return { ...state, detailData: action.payload };
    default:
      return state;
  }
}

export default dashboardPageReducer;
