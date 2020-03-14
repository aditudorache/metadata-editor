import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import { useInjectReducer } from 'utils/injectReducer';

import Grid from '@material-ui/core/Grid';
import DetailView from 'components/DetailView ';
import TreeView from 'components/TreeView';
import styled from 'styled-components';
import { themeSpacing } from 'styles/styled-components';
import reducer from './reducer';

const StyledLayout = styled.div`
  flex: 1;
  display: flex;
  padding-top: ${themeSpacing(1)}px;
  & > div {
    min-height: calc(100vh - 100px);
  }
  max-height: calc(100vh - 80px);
`;

const ScrollableGrid = styled(Grid)`
  max-height: 100%;
  overflow: auto;
  margin: 2px;
  border: 1px solid lightgrey;
`;

interface Props {}

const DashboardPage = () => {
  useInjectReducer({ key: 'editor', reducer });

  return (
    <div>
      <Helmet>
        <title>DashboardPage</title>
        <meta name="description" content="DashboardPage of the application." />
      </Helmet>
      <StyledLayout>
        <Grid container className="box">
          <ScrollableGrid item xs={3} className="column">
            <TreeView />
          </ScrollableGrid>
          <Grid item xs className="column">
            <DetailView />
          </Grid>
        </Grid>
      </StyledLayout>
    </div>
  );
};

export default memo(DashboardPage);
