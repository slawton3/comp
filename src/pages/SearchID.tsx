import React, { ReactElement, FC, useState, useEffect } from 'react';
import { useGetCocktailByIDQuery } from '../features/cocktails';
import { Button, TextField, Grid, Box, ListItem, ListItemText } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import CocktailCard from '../components/CocktailCard';
import { useParams, useSearchParams } from "react-router-dom";
import CocktailDetail from '../components/CocktailDetail';
import { IDrink } from '../features/types';


const SearchID: FC = (): ReactElement => {
    const { id } = useParams<string>();
    const {
        data: cocktails,
        isLoading,
        error
        } = useGetCocktailByIDQuery(id ? id : "");

    console.log(typeof cocktails)
  return (
    <>
        <CocktailDetail props={cocktails}/>
    </>
  );
};

export default SearchID;