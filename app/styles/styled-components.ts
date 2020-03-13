import * as styledComponents from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core';

// theme variables
export interface IThemeInterface {}

const muiTheme = createMuiTheme();

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

const themeSpacing = (...props: number[]) => ({ theme }) =>
  theme.spacing(...props);

export {
  css,
  muiTheme as theme,
  themeSpacing,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
  MuiThemeProvider,
  StylesProvider,
};
export default styled;
