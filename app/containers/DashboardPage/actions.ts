/*
 *
 * DashboardPage actions
 *
 */

import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const nodeSelectedAction = id => action(ActionTypes.NODE_SELECTED, id);
export const detailDataChangedAction = detailData =>
  action(ActionTypes.DETAIL_DATA_CHANGED, detailData);
