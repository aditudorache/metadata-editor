import * as React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import styled, { themeSpacing } from 'styles/styled-components';
import { Link } from 'react-router-dom';
import Img from 'components/Img';

const StyledTitle = styled(Typography)`
  flex-grow: 1;
`;

const StyledIconButton = styled(IconButton)`
  & img {
    height: ${themeSpacing(5)}px;
  }
`;

const StyledHeader = styled.div`
  flex-grow: 1;
`;

const Header = () => (
  <StyledHeader>
    <MuiAppBar position="static" color="default">
      <Toolbar>
        <StyledIconButton edge="start" color="inherit" aria-label="menu">
          <Img src="/GeoDotNetLogo.png" alt="Metadata editor" />
        </StyledIconButton>
        <StyledTitle variant="h6">Metadata editor</StyledTitle>
        <Link to="/">Edit</Link>
        <Link to="/raw">JSON</Link>
      </Toolbar>
    </MuiAppBar>
  </StyledHeader>
);

export default Header;
