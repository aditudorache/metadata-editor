import * as styledComponents from 'styled-components';
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';
import muiTheme from './muiTheme';

// theme variables
export interface IThemeInterface {}

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
