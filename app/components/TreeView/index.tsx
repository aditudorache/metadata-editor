import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import MuiTreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { useDispatch } from 'react-redux';
import { nodeSelectedAction } from 'containers/DashboardPage/actions';
interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

const data: TreeNode = {
  id: 'root',
  name: 'Parent',
  children: [
    {
      id: '1',
      name: 'Child - 1',
    },
    {
      id: '3',
      name: 'Child - 3',
      children: [
        {
          id: '4',
          name: 'Child - 4',
        },
      ],
    },
  ],
};

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const StyledTreeView = styled(MuiTreeView)`
  height: 100%;
  border: 1px solid;
`;

const TreeView: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const renderTree = (nodes: TreeNode) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map(node => renderTree(node))
        : null}
    </TreeItem>
  );

  const handleNodeSelect = (e, nodeId) => {
    console.log(nodeId);
    dispatch(nodeSelectedAction(nodeId));
  };

  return (
    <StyledTreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
      onNodeSelect={handleNodeSelect}
    >
      {renderTree(data)}
    </StyledTreeView>
  );
};

export default TreeView;
