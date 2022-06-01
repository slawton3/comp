// theme.js
import { createTheme } from "@mui/material/styles";



const theme = createTheme({
    palette: {
      primary: { main: "#0C389F", },
      secondary: {
        main: "#DBE9FD",
        contrastText: "#0C389F",
      },
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
  });

export default theme;