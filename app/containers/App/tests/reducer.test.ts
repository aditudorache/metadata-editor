import appReducer, { initialState } from '../reducer';
import { loadRepos, reposLoaded, repoLoadingError } from '../actions';
import { ContainerState } from '../types';

describe('appReducer', () => {
  let state: ContainerState;
  beforeEach(() => {
    state = {
      ...initialState,
      loading: false,
      error: false,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {} as any)).toEqual(expectedResult);
  });

  it('should handle the loadRepos action correctly', () => {
    const expectedResult = {
      ...initialState,
      loading: true,
      error: false,
    };
    expect(appReducer(state, loadRepos())).toEqual(expectedResult);
  });

  it('should handle the reposLoaded action correctly', () => {
    const fixture = [
      {
        name: 'My Repo',
      },
    ];
    const username = 'test';
    const expectedResult = {
      ...initialState,
      loading: false,
      error: false,
    };
    expect(appReducer(state, reposLoaded(fixture, username))).toEqual(
      expectedResult,
    );
  });

  it('should handle the repoLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };

    const expectedResult = {
      ...initialState,
      error: false,
      loading: false,
    };

    expect(appReducer(state, repoLoadingError(fixture))).toEqual(
      expectedResult,
    );
  });
});
