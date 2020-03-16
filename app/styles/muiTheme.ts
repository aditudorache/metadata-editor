import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

const palette: PaletteOptions = {
  primary: { main: '#1D70B7' },
  secondary: { main: '#18ACE4' },
};

const typography: TypographyOptions = {
  fontFamily: '"Libre Franklin", Helvetica, Arial',
};

const themeOptions: ThemeOptions = {
  palette,
  typography,
};

export default createMuiTheme(themeOptions);
