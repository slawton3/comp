import React, { ReactElement, FC } from "react";
import {
    Paper,
    Box,
    Grid,
    Typography,
    Button,
    Divider,
    Link,
    Skeleton
} from "@mui/material";
import CocktailCard from "../components/CocktaiDetail/CocktailCard";
import { useGetMostPopularCocktailsQuery } from "../features/cocktails";

const Home: FC = (): ReactElement => {
    const {
        data: cocktails,
        isLoading,
        error
    } = useGetMostPopularCocktailsQuery();

    return (
        <>
            <Box mt={5} mb={10}>
                <Paper
                    sx={{
                        p: 2,
                        margin: "auto",
                        maxWidth: 500,
                        flexGrow: 1
                    }}
                >
                    <Grid container direction="column" alignItems="center">
                        <Typography
                            align="center"
                            variant="h4"
                            component="h1"
                            gutterBottom
                        >
                            Find your next cocktail
                        </Typography>

                        <Button href="/search" variant="contained">
                            Try it now
                        </Button>
                    </Grid>
                </Paper>
            </Box>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
                The Classics
            </Typography>
            <Grid container spacing={4} sx={{ mx: "auto", width: "80%" }}>
                {!isLoading ? (
                    cocktails?.drinks?.map((cocktail) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Link href={`/search/${cocktail.idDrink}`}>
                                <CocktailCard
                                    key={cocktail.idDrink}
                                    cocktail={cocktail}
                                />
                            </Link>
                        </Grid>
                    ))
                ) : (
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height="100%"
                    />
                )}
            </Grid>
        </>
    );
};

export default Home;
