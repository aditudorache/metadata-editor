import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import styled, { themeSpacing } from 'styles/styled-components';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import { JsonEditor as Editor } from 'jsoneditor-react';
import jsonViewData from 'containers/DashboardPage/viewData';
import 'jsoneditor-react/es/editor.min.css';
import { treeChangedAction } from 'containers/DashboardPage/actions';

const StyledLayout = styled.div`
  flex-grow: 1;
  // padding-top: ${themeSpacing(1)}px;
  & > div {
    min-height: calc(100vh - 100px);
    border: 1px solid grey;

    & > div {
      width: 100%;
    }
  }
`;

const options = {
  mode: 'text',
  allowedModes: ['text', 'tree'],
  escapeUnicode: true,
};

const JsonView = () => {
  const treeData = useSelector(state => state?.dashboardPage?.treeData);
  const dispatch = useDispatch();
  const handleChange = data => {
    dispatch(treeChangedAction(data || {}));
  };

  useEffect(() => {
    if (treeData) return;
    handleChange(jsonViewData);
  }, [treeData]);

  return (
    <StyledLayout>
      <Grid container>
        {treeData && (
          <Editor value={treeData} onChange={handleChange} {...options} />
        )}
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
