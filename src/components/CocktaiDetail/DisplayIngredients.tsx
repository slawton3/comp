import { Box, Divider, Grid, Paper, Stack, styled } from "@mui/material";
import React, { useState } from "react";

interface IIngredientsProps {
    ingredient: string;
    measure: string;
}
interface IListDetailProps {
    ingredients: Array<IIngredientsProps>;
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const DisplayIngredients = ({ ingredients }: IListDetailProps): JSX.Element => {
    return (
        <div>
            {ingredients.map((ingredient) => (
                <Stack direction="row" spacing={2} key={ingredient.ingredient}>
                    <Item key={ingredient.measure}>{ingredient.measure}</Item>
                    <Item key={ingredient.ingredient}>
                        {ingredient.ingredient}
                    </Item>
                </Stack>
            ))}
        </div>
    );
};

export default DisplayIngredients;
