export interface Node {
  id?: string | number;
  name: string;
  [name: string]: any;
}

let i = 1;

const extractTree = (parent: Node, treeNode: Node) => {
  const children = Object.entries(treeNode)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        const item = value.reduce(
          (acc, val) => ({
            ...acc,
            [val.name]: val,
          }),
          {},
        );

        // eslint-disable-next-line no-plusplus
        const id = `array${i++}`;
        const name = `${key} (${id})`;

        return extractTree(
          {
            name,
            id,
          },
          item,
        );
      }

      if (typeof value === 'object') {
        // eslint-disable-next-line no-plusplus
        const id = value ? String((value as Node)?.id || '') : `empty${i++}`;
        const name = `${key} (${id})`;
        if (value === null)
          return {
            name,
            id,
            children: [],
          };

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
