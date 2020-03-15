import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import Grid from '@material-ui/core/Grid';
import DetailView from 'components/DetailView ';
import TreeView from 'components/TreeView';
import styled from 'styled-components';
import { themeSpacing } from 'styles/styled-components';

const StyledLayout = styled(Grid)`
  padding-top: ${themeSpacing(1)}px;
  & > div {
    min-height: calc(100vh - 80px);
  }
  min-height: calc(100vh - 80px);
`;

const ScrollableGrid = styled(Grid)`
  max-height: calc(100% - 104px);
  overflow: auto;
  margin: 2px;
  border: 1px solid lightgrey;
`;

const MetaEditorPage = () => (
  <div>
    <Helmet>
      <title>Metadata editor Page</title>
      <meta name="description" content="Metadata editor Page." />
    </Helmet>
    <StyledLayout container>
      <ScrollableGrid item xs={12} sm={3}>
        <TreeView />
      </ScrollableGrid>
      <Grid item sm>
        <DetailView />
      </Grid>
    </StyledLayout>
  </div>
);

export default memo(MetaEditorPage);
