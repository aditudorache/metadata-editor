import { action } from 'typesafe-actions';

import ActionTypes from './constants';

export const loadRepos = () => action(ActionTypes.LOAD_REPOS);
export const reposLoaded = (repos: any[], username: string) =>
  action(ActionTypes.LOAD_REPOS_SUCCESS, { repos, username });
export const repoLoadingError = (error: object) =>
  action(ActionTypes.LOAD_REPOS_ERROR, error);

export const nodeSelectedAction = id => action(ActionTypes.NODE_SELECTED, id);
export const detailDataChangedAction = detailData =>
  action(ActionTypes.DETAIL_DATA_CHANGED, detailData);
export const treeChangedAction = treeData =>
  action(ActionTypes.TREE_CHANGED, treeData);
