import viewData from 'containers/DashboardPage/viewData';

const extractTree = (parent, treeNode) => {
  Object.entries(treeNode).map(([key, value]) => {
    if (Array.isArray(value)) {
      return value.map(node => ({
        ...parent,
        [key]: extractTree(treeNode, node),
      }));
    }

    // if (isObject(value)) {
    //   {
    //     ...parent,
    //     [key]: extractTree(treeNode, node)
    //   }))
    // }

    return {};
  });
};

console.log('tree', extractTree({}, viewData), viewData);

export default extractTree;
