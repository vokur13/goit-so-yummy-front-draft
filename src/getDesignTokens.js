import { amber, deepOrange, grey, teal, lime } from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      ...amber,
      ...(mode === 'dark' && {
        main: amber[300],
      }),
    },
    ...(mode === 'dark'
      ? {
          background: {
            default: deepOrange[900],
            paper: deepOrange[900],
          },
        }
      : {
          background: {
            default: teal[500],
            paper: lime[500],
          },
        }),
    text: {
      ...(mode === 'light'
        ? {
            primary: grey[900],
            secondary: grey[800],
          }
        : {
            primary: '#fff',
            secondary: grey[500],
          }),
    },
  },
});
