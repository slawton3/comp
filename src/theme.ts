// theme.js
import { createTheme } from "@mui/material/styles";



const theme = createTheme({
    palette: {
      mode: 'dark',
    },

    // Components
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          root: {},
          sizeSmall: {
            padding: "4px 16px",
            fontSize: 14,
          },
          sizeMedium: {
            padding: "9px 24px",
            fontSize: 16,
          },
          sizeLarge: {
            padding: "10px 32px",
            fontSize: 20,
          },
        },
      },
    },
    //fonts
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
    //transitions
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        // most basic recommended timing
        standard: 300,
        // this is to be used in complex animations
        complex: 375,
        // recommended when something is entering screen
        enteringScreen: 225,
        // recommended when something is leaving screen
        leavingScreen: 195,
      },
    },
  });

export default theme;