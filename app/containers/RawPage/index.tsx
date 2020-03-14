import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core';
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

  const [editor, setEditor] = useState(null);

  const setRef = instance => {
    if (instance) {
      const { jsonEditor } = instance;
      setEditor(jsonEditor);
    }
  };

  useEffect(() => {
    if (treeData) return;
    handleChange(jsonViewData);
  }, [treeData]);

  const handleFormat = () => {
    if (editor && editor.getMode() === 'text') {
      editor.format();
    }
  };

  const handleCompact = () => {
    if (editor !== null && editor.getMode() === 'text') {
      editor.compact();
    }
  };

  const setTextView = () => {
    if (editor !== null) {
      editor.setMode('text');
    }
  };

  const setTreeView = () => {
    if (editor !== null) {
      editor.setMode('tree');
    }
  };

  return (
    <StyledLayout>
      <Grid container>
        <Button variant="contained" onClick={handleFormat}>
          Format
        </Button>
        <Button variant="contained" color="primary" onClick={handleCompact}>
          Compact
        </Button>
        <Button variant="contained" color="primary" onClick={setTextView}>
          Text
        </Button>
        <Button variant="contained" color="primary" onClick={setTreeView}>
          Tree
        </Button>

        {treeData && (
          <Editor
            value={treeData}
            onChange={handleChange}
            {...options}
            ref={setRef}
          />
        )}
      </Grid>
    </StyledLayout>
  );
};

const RawPage = () => (
  <div>
    <Helmet>
      <title>RawPage</title>
      <meta name="description" content="RawPage of the application." />
    </Helmet>
    <JsonView />
  </div>
);

export default memo(RawPage);
