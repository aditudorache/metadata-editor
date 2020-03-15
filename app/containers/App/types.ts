import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from '../../types';

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

/* --- STATE --- */
interface AppState {
  readonly loading: boolean;
  readonly error?: object | boolean;

  treeData: TreeNode | null;
  selectedNodeId: string | null;
  detailData: any;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type RootState = ApplicationRootState;
type ContainerState = AppState;
type ContainerActions = AppActions;

// eslint-disable-next-line no-undef
export { RootState, ContainerState, ContainerActions };
