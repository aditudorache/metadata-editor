import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import DetailView from 'components/DetailView ';
import TreeView from 'components/TreeView';
import styled from 'styled-components';
import { themeSpacing } from 'styles/styled-components';

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

const MetaEditorPage = () => (
  <div>
    <Helmet>
      <title>Metadata editor Page</title>
      <meta name="description" content="Metadata editor Page." />
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

export default memo(MetaEditorPage);
