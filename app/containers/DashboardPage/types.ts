import { ActionType } from 'typesafe-actions';
import { TreeNode } from 'components/TreeView';
import * as actions from './actions';

/* --- STATE --- */
export interface DashboardPageState {
  treeData: TreeNode | null;
  selectedNodeId: string | null;
  detailData: any;
}

/* --- ACTIONS --- */
export type DashboardPageActions = ActionType<typeof actions>;
