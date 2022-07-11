import { Box, Divider, Grid, Paper, Stack, styled } from "@mui/material";
import React, { useState } from "react";

interface IIngredientsProps {
    ingredient: string;
    measure: string;
}
interface IListDetailProps {
    ingredients: Array<IIngredientsProps>;
}

const Wrapper = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    justifyContent: "space-evenly",
    display: "flex"

}));

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    color: theme.palette.text.secondary
}));

const DisplayIngredients = ({ ingredients }: IListDetailProps): JSX.Element => {
    return (
        <div>
            {ingredients.map((ingredient) => (
                <Wrapper>
                    <Stack direction="row" spacing={2} alignItems="center" key={ingredient.ingredient}>
                        <Item key={ingredient.measure}>{ingredient.measure}</Item>
                        <Item key={ingredient.ingredient}>
                            {ingredient.ingredient}
                        </Item>
                    </Stack>
                </Wrapper>
            ))}
        </div>
    );
};

export default DisplayIngredients;
