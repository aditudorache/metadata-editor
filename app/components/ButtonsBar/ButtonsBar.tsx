import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import { themeSpacing } from 'styles/styled-components';

const ButtonsBar = styled(Grid)`
  margin: ${themeSpacing(1, 0)};
  padding: ${themeSpacing(1)}px;
  & > button {
    margin-left: ${themeSpacing(1)}px;
  }
`;

export default ButtonsBar;
