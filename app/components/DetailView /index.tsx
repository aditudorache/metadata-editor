import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isObject from 'lodash/isObject';
import get from 'lodash/get';
import { TextField, Button, Grid } from '@material-ui/core';
import { themeSpacing } from 'styles/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { detailDataChangedAction } from 'containers/App/actions';
import ButtonsBar from 'components/ButtonsBar';

const StyledDetailView = styled(Grid)`
  padding: ${themeSpacing(1, 1, 0, 1)};
  min-height: calc(100vh - 80px);
`;

// Here we set to height in pixels to force the flex container to scroll
const StyledForm = styled.form`
  flex-grow: 1;
  height: 1px;
  overflow: auto;
`;

const getDetail = state => {
  if (!state.global) return null;
  const { treeData, selectedNodeId } = state?.global;
  const node = selectedNodeId ? get(treeData, selectedNodeId, null) : treeData;
  return node;
};

const DetailView = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const detailData = useSelector(state => getDetail(state));
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleCancel = () => {
    setFormData(detailData);
  };

  const handleSave = () => {
    dispatch(detailDataChangedAction(formData));
  };

  useEffect(() => {
    if (!detailData) return;
    setFormData(detailData);
  }, [detailData]);

  return (
    <StyledDetailView container direction="column">
      <StyledForm noValidate autoComplete="off">
        {formData &&
          Object.entries(formData).map(([key, value]) => {
            if (isObject(value) || Array.isArray(value)) return null;
            return (
              <TextField
                fullWidth
                key={key}
                id={key}
                label={key}
                value={value || ''}
                onChange={handleChange}
              />
            );
          })}
      </StyledForm>
      <ButtonsBar container justify="flex-end">
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </ButtonsBar>
    </StyledDetailView>
  );
};
export default DetailView;
