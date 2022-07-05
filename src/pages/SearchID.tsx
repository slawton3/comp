import React, { ReactElement, FC, useState, useEffect } from "react";
import { useGetCocktailByIDQuery } from "../features/cocktails";
import { Button, Skeleton } from "@mui/material";
import { useParams, useSearchParams } from "react-router-dom";
import CocktailDetail from "../components/CocktaiDetail/CocktailDetail";
import { IDrink } from "../features/types";

const SearchID: FC = (): ReactElement => {
    const { id } = useParams<string>();
    const {
        data: cocktails,
        isLoading,
        error
    } = useGetCocktailByIDQuery(id ? id : "");

    if (isLoading) return <Skeleton variant="text" />;
    if (error) return <div>An error has occured.</div>;

    return (
        <>
            {cocktails ? (
                <CocktailDetail drink={cocktails.drinks[0]} />
            ) : (
                "No data"
            )}
        </>
    );
};

export default SearchID;
