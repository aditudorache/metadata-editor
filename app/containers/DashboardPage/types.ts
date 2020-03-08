import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

/* --- STATE --- */
export interface DashboardPageState {
  treeData: any;
  selectedNodeId: any;
  detailData: any;
}

/* --- ACTIONS --- */
export type DashboardPageActions = ActionType<typeof actions>;
