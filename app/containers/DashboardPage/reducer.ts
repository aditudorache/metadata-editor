/*
 *
 * DashboardPage reducer
 *
 */

import set from 'lodash/set';
import ActionTypes from './constants';
import { DashboardPageState, DashboardPageActions } from './types';

export const initialState: DashboardPageState = {
  treeData: null,
  selectedNodeId: '',
  detailData: null,
};

function dashboardPageReducer(
  state = initialState,
  action: DashboardPageActions,
): DashboardPageState {
  switch (action.type) {
    case ActionTypes.NODE_SELECTED:
      return { ...state, selectedNodeId: action.payload };
    case ActionTypes.DETAIL_DATA_CHANGED: {
      const { treeData, selectedNodeId } = state;
      const newTreeData = selectedNodeId
        ? set(treeData, selectedNodeId, action.payload)
        : action.payload;
      return {
        ...state,
        treeData: newTreeData,
        detailData: action.payload,
      };
    }
    case ActionTypes.TREE_CHANGED:
      return { ...state, treeData: action.payload };
    default:
      return state;
  }
}

export default dashboardPageReducer;
