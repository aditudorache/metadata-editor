import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import isObject from 'lodash/isObject';
import { TextField } from '@material-ui/core';
import { themeSpacing } from 'styles/styled-components';
import { useDispatch } from 'react-redux';
import { detailDataChangedAction } from 'containers/DashboardPage/actions';
import viewData from 'containers/DashboardPage/viewData';

const StyledDetailView = styled.div`
  height: 100%;
`;

const StyledTextField = styled(TextField)`
  margin: ${themeSpacing(1)}px;
`;

const DetailView = () => {
  const [formData, setFormData] = useState(viewData);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  useEffect(() => {
    dispatch(detailDataChangedAction(formData));
  }, [formData]);

  return (
    <StyledDetailView>
      <form noValidate autoComplete="off">
        {Object.entries(formData).map(([key, value]) => {
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
