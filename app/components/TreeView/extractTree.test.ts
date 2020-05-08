import { Node } from 'containers/App/types';
import extractTree from './extractTree';

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
        { name: 'a', id: 'view.a', children: [] },
        { name: 'b', id: 'view.b', children: [] },
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
          id: 'view.fields',
          name: 'fields',
          children: [
            { name: 'a-name', id: 'view.fields[0]', children: [] },
            { name: 'b-name', id: 'view.fields[1]', children: [] },
          ],
        },
      ],
    });
  });

  it.only('should render a composite object', () => {
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
          id: 'view.fields',
          name: 'fields',
          children: [
            {
              name: 'a-name',
              id: 'view.fields[0]',
              children: [
                { name: 'aa', id: 'view.fields[0].aa', children: [] },
                { name: 'aa1', id: 'view.fields[0].aa1', children: [] },
              ],
            },
            { name: 'b-name', id: 'view.fields[1]', children: [] },
          ],
        },
        { name: 'c', id: 'view.c', children: [] },
        { name: 'd', id: 'view.d', children: [] },
      ],
    });
  });
});
