import React, { ReactElement, FC, useState } from 'react';
import { useGetCocktailByNameQuery } from '../features/cocktails';
import { Button, TextField, Grid, List, ListItem, ListItemText } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Search: FC = (): ReactElement => {
  const {
    data: cocktails,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetCocktailByNameQuery('Old Fashioned');

  
  
  const { handleSubmit, reset, control } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2} mt={5}>
        <form>
          <Grid item>
            <Controller
              name={"searchText"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label={"Search Query"} />
              )}
            />
          </Grid>
          <Grid item>
            <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
          </Grid>
          <Grid item>
            <Button onClick={() => reset()} variant={"outlined"}>Reset</Button>
          </Grid>
        </form>
      </Grid>
      <List>
        {cocktails?.map((cocktail) => (
          <ListItem key={cocktail.idDrink}>
            <ListItemText>{cocktail.strDrink}</ListItemText>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default Search