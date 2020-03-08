import { action } from 'typesafe-actions';

import { nodeSelectedAction } from '../actions';
import ActionTypes from '../constants';

describe('DashboardPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = action(ActionTypes.NODE_SELECTED, 'id');
      expect(nodeSelectedAction('id')).toEqual(expected);
    });
  });
});
