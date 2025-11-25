// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c45738',
      light: '#e87656',
      dark: '#9a3f2a',
    },
    secondary: {
      main: '#355168',
      light: '#56718a',
      dark: '#243748',
    },
    success: {
      main: '#4caf50',
    },
    warning: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#f9f9f9',
      paper: '#ffffff',
    },
    text: {
      primary: '#1f1f1f',
      secondary: '#555555',
    },
  },

  // Optional: typography setup
  typography: {
    fontFamily: `'Inter', sans-serif`,
  },
});

export default theme;
