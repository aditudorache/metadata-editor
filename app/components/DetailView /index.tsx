import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isObject from 'lodash/isObject';
import get from 'lodash/get';
import { TextField, Button } from '@material-ui/core';
import { themeSpacing } from 'styles/styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { detailDataChangedAction } from 'containers/DashboardPage/actions';

const StyledDetailView = styled.div`
  height: 100%;
`;

const StyledTextField = styled(TextField)`
  margin: ${themeSpacing(1)}px;
`;

const getDetail = state => {
  if (!state.dashboardPage) return null;
  const { treeData, selectedNodeId } = state?.dashboardPage;
  const node = get(treeData, selectedNodeId, null);
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
    <StyledDetailView>
      <form noValidate autoComplete="off">
        <Button variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
        {formData &&
          Object.entries(formData).map(([key, value]) => {
            if (isObject(value) || Array.isArray(value)) return null;
            return (
              <StyledTextField
                fullWidth
                key={key}
                id={key}
                label={key}
                value={value || ''}
                onChange={handleChange}
              />
            );
          })}
      </form>
    </StyledDetailView>
  );
};
export default DetailView;
