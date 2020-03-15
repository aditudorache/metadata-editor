import set from 'lodash/set';
import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  treeData: null,
  selectedNodeId: '',
  detailData: null,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_REPOS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.LOAD_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: state.error,
      };
    case ActionTypes.LOAD_REPOS_ERROR: {
      const { ...rest } = state;
      return {
        error: action.payload,
        loading: false,
        ...rest,
      };
    }
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

export default appReducer;
