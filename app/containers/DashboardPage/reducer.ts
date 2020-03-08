/*
 *
 * DashboardPage reducer
 *
 */

import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';

export const initialState: ContainerState = {
  treeData: null,
  selectedNode: null,
};

function dashboardPageReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.NODE_SELECTED:
      return { ...state, selectedNode: action.payload };
    default:
      return state;
  }
}

export default dashboardPageReducer;
