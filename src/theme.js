import { createTheme } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors/';
import { Box } from '@material-ui/core';

const theme = createTheme({
  palette: {
    secondary: {
      main: grey[900],
      light: 'orange',
    },

  },
  props: {
    MuiPaper: {
      component: Box,
    },
    MuiTextField: {
      variant: 'filled',
      margin: 'normal'
    }
  },
});

export default theme