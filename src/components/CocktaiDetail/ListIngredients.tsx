import { Divider, Paper, Stack, styled } from "@mui/material";
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
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const ListIngredients = ({ ingredients }: IListDetailProps): JSX.Element => {
    return (
        <div>
            <Stack spacing={2}>
                {ingredients &&
                    ingredients.map((ingredient) => (
                        <Stack
                            direction="row"
                            divider={
                                <Divider orientation="vertical" flexItem />
                            }
                            spacing={2}
                        >
                            <Item>{ingredient.ingredient}</Item>
                            <Item>{ingredient.measure}</Item>
                        </Stack>
                    ))}
            </Stack>
        </div>
    );
};

export default ListIngredients;
