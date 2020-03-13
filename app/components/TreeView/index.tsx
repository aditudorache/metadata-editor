import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import MuiTreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  nodeSelectedAction,
  treeChangedChangedAction,
} from 'containers/DashboardPage/actions';
import jsonViewData from 'containers/DashboardPage/viewData';
import { DashboardPageState } from 'containers/DashboardPage/types';
import extractTree from './extractTree';

export interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

const StyledTreeView = styled(MuiTreeView)`
  height: 100%;
  border: 1px solid lightgrey;
`;

const TreeView: React.FC = () => {
  const dispatch = useDispatch();
  const treeData = useSelector<{ dashboardPage?: DashboardPageState }>(
    state => state?.dashboardPage?.treeData,
  );

  const [tree, setTree] = useState();

  useEffect(() => {
    dispatch(treeChangedChangedAction(jsonViewData));
  }, []);

  useEffect(() => {
    if (!treeData) return;
    const data = extractTree({ name: 'root', id: 'root' }, treeData);
    setTree(data);
  }, [treeData]);

  const renderTree = (nodes: TreeNode) => {
    if (!nodes) return () => {};
    return (
      <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
        {Array.isArray(nodes.children)
          ? nodes.children.map(node => renderTree(node))
          : null}
      </TreeItem>
    );
  };

  const handleNodeSelect = (e, nodeId) => {
    dispatch(nodeSelectedAction(nodeId.substring(nodeId.indexOf('.') + 1)));
  };

  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleNodeSelect}
    >
      {renderTree(tree)}
    </StyledTreeView>
  );
};

export default TreeView;
