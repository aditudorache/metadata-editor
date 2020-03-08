/*
 *
 * DashboardPage actions
 *
 */

import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const nodeSelectedAction = id => action(ActionTypes.NODE_SELECTED, id);
