// import viewData from 'containers/DashboardPage/viewData';
import extractTree, { Node } from './extractTree';

describe('extractTree', () => {
  it('should render a tree with strings', () => {
    const tree: Node = {
      id: 'root',
      name: 'root',
      a: '',
      b: '',
    };
    expect(extractTree({ name: 'view', id: 'view' }, tree)).toEqual({
      id: 'view',
      name: 'view',
      children: [],
    });
  });

  it('should render a tree with objects', () => {
    const tree: Node = {
      id: 'root',
      name: 'root',
      a: { name: 'a-name', id: 'a-id' },
      b: { name: 'b-name', id: 'b-id' },
    };

    const result = extractTree({ name: 'view', id: 'view' }, tree);
    expect(result).toEqual({
      id: 'view',
      name: 'view',
      children: [
        { name: 'a', id: 'a-id', children: [] },
        { name: 'b', id: 'b-id', children: [] },
      ],
    });
  });

  it('should render a tree with arrays', () => {
    const tree: Node = {
      id: 'root',
      name: 'root',
      fields: [
        { name: 'a-name', id: 'a-id' },
        { name: 'b-name', id: 'b-id' },
      ],
    };

    const result = extractTree({ name: 'view', id: 'view' }, tree);
    expect(result).toEqual({
      id: 'view',
      name: 'view',
      children: [
        {
          id: 'array',
          name: 'fields',
          children: [
            { name: 'a-name', id: 'a-id', children: [] },
            { name: 'b-name', id: 'b-id', children: [] },
          ],
        },
      ],
    });
  });

  it('should render a composite object', () => {
    const tree: Node = {
      id: 'root',
      name: 'root',
      fields: [
        {
          name: 'a-name',
          id: 'a-id',
          aa: { name: 'aa-name', id: 'aa-id' },
          aa1: { name: 'aa1-name', id: 'aa1-id' },
        },
        { name: 'b-name', id: 'b-id' },
      ],
      c: { name: 'c-name', id: 'c-id' },
      d: { name: 'd-name', id: 'd-id' },
    };

    const result = extractTree({ name: 'view', id: 'view' }, tree);
    expect(result).toEqual({
      id: 'view',
      name: 'view',
      children: [
        {
          id: 'array',
          name: 'fields',
          children: [
            {
              name: 'a-name',
              id: 'a-id',
              children: [
                { name: 'aa', id: 'aa-id', children: [] },
                { name: 'aa1', id: 'aa1-id', children: [] },
              ],
            },
            { name: 'b-name', id: 'b-id', children: [] },
          ],
        },
        { name: 'c', id: 'c-id', children: [] },
        { name: 'd', id: 'd-id', children: [] },
      ],
    });
  });

  // it.only('should render a view object', () => {
  //   const tree: Node = viewData;
  //   const result = extractTree({ name: 'view', id: 'view' }, tree);
  //   expect(result).toEqual({});
  // });
});
