import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOAD_REPOS:
      return {
        loading: true,
        error: false,
      };
    case ActionTypes.LOAD_REPOS_SUCCESS:
      return {
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
    default:
      return state;
  }
}

export default appReducer;
