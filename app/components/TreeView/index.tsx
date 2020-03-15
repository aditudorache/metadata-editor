import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MuiTreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useDispatch, useSelector } from 'react-redux';
import { nodeSelectedAction, treeChangedAction } from 'containers/App/actions';
import jsonViewData from 'exampleJson';
import { TreeNode } from 'containers/App/types';
import extractTree from './extractTree';

const StyledTreeView = styled(MuiTreeView)`
  min-height: calc(100% - 4px);
`;

const TreeView: React.FC = () => {
  const dispatch = useDispatch();
  const treeData = useSelector<TreeNode | null>(
    state => state?.global?.treeData,
  );

  const [tree, setTree] = useState<TreeNode | undefined>();

  useEffect(() => {
    if (treeData) return;
    dispatch(treeChangedAction(jsonViewData));
  }, []);

  useEffect(() => {
    if (!treeData) return;
    const data = extractTree(
      { name: 'root', id: 'root' },
      treeData as TreeNode,
    );
    setTree(data);
  }, [treeData]);

  const renderTree = (nodes: TreeNode) => {
    if (!nodes) return () => {};
    return (
      <TreeItem key={nodes.id} nodeId={String(nodes.id)} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? nodes.children.map(node => node && renderTree(node))
          : null}
      </TreeItem>
    );
  };

  const handleNodeSelect = (e, nodeId) => {
    dispatch(
      nodeSelectedAction(
        nodeId === 'root' ? '' : nodeId.substring(nodeId.indexOf('.') + 1),
      ),
    );
  };

  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleNodeSelect}
    >
      {tree && renderTree(tree)}
    </StyledTreeView>
  );
};

export default TreeView;
