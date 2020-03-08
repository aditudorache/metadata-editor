import { action } from 'typesafe-actions';

import { defaultAction } from '../actions';
import ActionTypes from '../constants';

describe('DashboardPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = action(ActionTypes.NODE_SELECTED);
      expect(defaultAction()).toEqual(expected);
    });
  });
});
