import React from "react";
import { Box, CssBaseline, Paper, Typography, ThemeProvider } from "@mui/material";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Paper
          elevation={3}
          sx={{ padding: "1rem", backgroundColor: "secondary.light" }}
        >
          <Typography color="primary.dark" variant="h1">
            Starter App
          </Typography>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;