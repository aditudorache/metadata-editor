import extractTree from './extractTree';

describe('extractTree', () => {
  it('should render an tree with strings', () => {
    const tree = {
      a: '',
      b: '',
    };
    expect(extractTree({}, tree)).toEqual({});
  });
});
