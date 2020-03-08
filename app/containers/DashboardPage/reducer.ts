/*
 *
 * DashboardPage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  treeData: null,
  selectedNodeId: null,
  detailData: null,
};

function dashboardPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
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
