import React from 'react';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled, { themeSpacing } from 'styles/styled-components';
import { Link } from 'react-router-dom';

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

const StyledIconButton = styled(IconButton)`
  margin-right: ${themeSpacing(2)}px;
`;

const StyledAppBar = styled.div`
  flex-grow: 1;
`;

const AppBar = () => (
  <StyledAppBar>
    <MuiAppBar position="static" color="primary">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </StyledIconButton>
        <StyledTitle variant="h6">Metadata editor</StyledTitle>
        <Link to="/">Editor</Link>
        <Link to="/raw">Raw</Link>
      </Toolbar>
    </MuiAppBar>
  </StyledAppBar>
);

export default AppBar;