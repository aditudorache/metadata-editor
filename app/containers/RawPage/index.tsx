import React, { memo } from 'react';
import { Helmet } from 'react-helmet';

import styled, { themeSpacing } from 'styles/styled-components';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { TextareaAutosize } from '@material-ui/core';

const StyledLayout = styled.div`
  flex-grow: 1;
  padding-top: ${themeSpacing(1)}px;
  & > div {
    min-height: calc(100vh - 100px);
    border: 1px solid grey;
  }
`;

const StyeldTextarea = styled(TextareaAutosize)`
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow-y: scroll;
`;

const JsonView = () => {
  const treeData = useSelector(state => state?.dashboardPage?.treeData);
  return (
    <StyledLayout>
      <Grid container spacing={2}>
        <StyeldTextarea>{JSON.stringify(treeData)}</StyeldTextarea>
      </Grid>
    </StyledLayout>
  );
};

const RawPage = () => (
  // Warning: Add your key to RootState in types/index.d.ts file
  // useInjectReducer({ key: 'dashboardPage', reducer });

  <div>
    <Helmet>
      <title>RawPage</title>
      <meta name="description" content="RawPage of the application." />
    </Helmet>
    <JsonView />
  </div>
);

export default memo(RawPage);
