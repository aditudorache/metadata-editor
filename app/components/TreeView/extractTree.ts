import { TreeNode, Node } from 'containers/App/types';

const extractTree = (parent: Node, treeNode: Node): TreeNode => {
  const children = Object.entries(treeNode)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const item = value.reduce(
          (acc, val, index) => ({
            ...acc,
            [val.name || val.$id]: {
              path: `${parent.id}.${key}[${index}]`,
              ...val,
            },
          }),
          {},
        );

        const path = `${parent.id}.${key}`;
        const id = path;
        const name = `${key}`;

        return extractTree(
          {
            name,
            id,
          },
          item,
        );
      }

      if (typeof value === 'object' && value !== null) {
        const path = value?.path || `${parent.id}.${key}`;
        const id = path;
        const name = `${key}`;

        return extractTree(
          {
            name,
            id,
          },
          value,
        );
      }

      return null;
    })
    .filter(node => node !== null);

  return {
    ...parent,
    children: [...children],
  };
};

export default extractTree;
