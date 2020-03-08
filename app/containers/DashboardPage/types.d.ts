import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface DashboardPageState {
  treeData: any;
  selectedNodeId: any;
  detailData: any;
}

/* --- ACTIONS --- */
type DashboardPageActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = DashboardPageState;
type ContainerActions = DashboardPageActions;

export { RootState, ContainerState, ContainerActions };
