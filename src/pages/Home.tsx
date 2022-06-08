import React, { ReactElement, FC } from 'react';
import { Paper, Box, Grid, Typography, Button, Divider } from '@mui/material';
import CocktailCard from '../components/CocktailCard';
import { useGetMostPopularCocktailsQuery } from '../features/cocktails';

const Home: FC = (): ReactElement => {
    const {
        data: cocktails,
        isLoading,
        error
      } = useGetMostPopularCocktailsQuery();
      
    return (
        <>
        <Box mt={5} mb={10}>
            <Paper sx={{
                p: 2,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
            }}>
                <Grid container direction="column" alignItems="center">
                    <Typography align="center" variant="h4" component="h1" gutterBottom>
                        Find your next cocktail
                    </Typography>
                    
                    <Button href="/search" variant="contained">Try it now</Button>
                </Grid>
            </Paper>
        </Box>
        <Grid container direction="column" alignItems="center">
            <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {cocktails?.drinks?.map((cocktail) => (
                    <Grid item xs={2} sm={4} md={4}>
                        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
                    </Grid>
                ))}
            </Grid>
        </Grid>
    </>
    )
}

export default Home;