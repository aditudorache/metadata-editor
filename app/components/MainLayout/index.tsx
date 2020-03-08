import React from 'react';
import Grid from '@material-ui/core/Grid';
import DetailView from 'components/DetailView ';
import TreeView from 'components/TreeView';
import styled from 'styled-components';
import { themeSpacing } from 'styles/styled-components';

const StyledLayout = styled.div`
  flex-grow: 1;
  padding-top: ${themeSpacing(1)}px;
  & > div {
    min-height: calc(100vh - 100px);
  }
`;

const MainLayout = () => (
  <StyledLayout>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <TreeView />
      </Grid>
      <Grid item xs>
        <DetailView />
      </Grid>
    </Grid>
  </StyledLayout>
);

export default MainLayout;
