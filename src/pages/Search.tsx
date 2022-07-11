import React, { ReactElement, FC, useState } from "react";
import {
    useGetCocktailByLetterQuery,
    useGetCocktailByNameQuery,
    useGetMostPopularCocktailsQuery
} from "../features/cocktails";
import {
    Button,
    TextField,
    Grid,
    Box,
    ListItem,
    ListItemText
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CocktailCard from '../components/CocktaiDetail/views/CocktailCard'

const Search: FC = (): ReactElement => {
    const { handleSubmit, reset, control } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <>
            <Grid
                container
                direction="column"
                alignItems="center"
                spacing={2}
                mt={5}
            >
                <form>
                    <Grid item>
                        <Controller
                            name={"searchText"}
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <TextField
                                    onChange={onChange}
                                    value={value}
                                    label={"Search Query"}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={() => reset()} variant={"outlined"}>
                            Reset
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </>
    );
};

export default Search;
