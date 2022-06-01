
// src/componetns/Footer.tsx

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#FFFFFFF",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="subtitle1">
              [Business Name Here]
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="black" variant="subtitle2">
              {`${new Date().getFullYear()}`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;