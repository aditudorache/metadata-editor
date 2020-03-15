import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Button, Grid } from '@material-ui/core';
import styled, { themeSpacing } from 'styles/styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { JsonEditor as Editor } from 'jsoneditor-react';
import jsonViewData from 'exampleJson';
import 'jsoneditor-react/es/editor.min.css';
import { treeChangedAction } from 'containers/App/actions';
import ButtonsBar from 'components/ButtonsBar';

const StyledLayout = styled(Grid)`
  min-height: calc(100vh - 64px);
`;

const EditorStyle = styled(Grid)`
  flex: 1;
  & > div {
    height: calc(100vh - 64px - 16px - 52px);
    padding: ${themeSpacing(1)}px;
  }

  & .jsoneditor {
    border: 1px solid lightgrey;
  }
`;

const options = {
  mode: 'text',
  allowedModes: ['text', 'tree'],
  escapeUnicode: true,
  mainMenuBar: false,
};

const ChangeViewButton = ({ mode, setMode }) => (
  <Button variant="contained" color="primary" onClick={() => setMode(mode)}>
    View as {mode}
  </Button>
);

const nextViewMode = view => (view === 'text' ? 'tree' : 'text');

const JsonView = () => {
  const [viewMode, setViewMode] = useState(options.mode);
  const treeData = useSelector(state => state?.global?.treeData);
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
    if (editor && viewMode === 'text') {
      editor.format();
    }
  };

  const handleCompact = () => {
    if (editor !== null && viewMode === 'text') {
      editor.compact();
    }
  };

  const changeView = view => {
    const newView = view; // nextViewMode(view);
    setViewMode(newView);
    if (editor !== null) {
      editor.setMode(newView);
    }
  };

  return (
    <StyledLayout container direction="column">
      <EditorStyle item>
        {treeData && (
          <Editor
            value={treeData}
            onChange={handleChange}
            {...options}
            ref={setRef}
          />
        )}
      </EditorStyle>
      <ButtonsBar container justify="flex-end" alignItems="center">
        {viewMode === 'text' && (
          <>
            <Button variant="contained" onClick={handleFormat}>
              Format JSON
            </Button>
            <Button variant="contained" onClick={handleCompact}>
              Compact JSON
            </Button>
          </>
        )}
        <ChangeViewButton mode={nextViewMode(viewMode)} setMode={changeView} />
      </ButtonsBar>
    </StyledLayout>
  );
};

const JsonEditorPage = () => (
  <div>
    <Helmet>
      <title>JSON editor Page</title>
      <meta name="description" content="JSON editor Page" />
    </Helmet>
    <JsonView />
  </div>
);

export default memo(JsonEditorPage);
