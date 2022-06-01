import React, { ReactElement, FC, useState, useEffect } from 'react';
import { Paper, Box, Grid, Typography, Button, Divider } from '@mui/material';

const Home: FC<any> = (): ReactElement => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    return (
        <Box mt={5}>
        <Paper sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 500,
            flexGrow: 1,
        }}>
            <Grid container direction="column" alignItems="center">
                <Typography align="center" variant="h4" component="h1" gutterBottom>
                 Efficiently search for quality Youtube content
                </Typography>
                <Divider />
                <Button href="/search" variant="contained">Try it now</Button>
            </Grid>
        </Paper>
        </Box>
    )
}

export default Home;