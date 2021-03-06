// src/componetns/Footer.tsx

import React, { FC, ReactElement } from "react";
import { alpha, Box, Container, Grid, styled, Typography } from "@mui/material";
import theme from "../theme";
export const Footer: FC = (): ReactElement => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                position: "relative",
                backgroundColor: theme.palette.action.hover,
                paddingTop: "1rem",
                paddingBottom: "1rem"
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography variant="subtitle1">
                            [Business Name Here]
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="subtitle2">
                            {`${new Date().getFullYear()}`}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;
