import { Box, Container, Grid, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IDrink } from "../../features/types";
import DisplayIngredients from "./DisplayIngredients";
import CocktailCard from "./CocktailCard";
interface CocktailDetailProps {
    drink: IDrink;
}

interface IIngredientsProps {
    ingredient: string;
    measure: string;
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {
    const [ingredients, setIngredients] = useState<Array<IIngredientsProps>>(
        []
    );
    const [instructions, setInstructions] = useState<string[]>([]);

    useEffect(() => {
        const parseDrink = (drink: IDrink) => {
            const ingreds = Object.fromEntries(
                Object.entries(drink).filter(
                    ([key, value]) =>
                        key.includes("strIngredient") && value !== null
                )
            );
            const measures = Object.fromEntries(
                Object.entries(drink).filter(
                    ([key, value]) =>
                        key.includes("strMeasure") && value !== null
                )
            );
            const instrucs = Object.fromEntries(
                Object.entries(drink).filter(
                    ([key, value]) =>
                        key === "strInstructions" && value !== null
                )
            );
            const combined = Object.keys(ingreds).map((k) => ({
                ingredient: ingreds[k],
                measure: measures[`strMeasure${k.slice(13)}`] ?? "Add"
            }));
            setIngredients(combined);
            setInstructions(Object.values(instrucs));
        };
        parseDrink(drink);
    }, [drink]);

    const displayDetailedCard = (): JSX.Element => {
        return (
            <Grid
                container
                direction="column"
                spacing={2}
                justifyContent="center"
            >
                <Grid item>
                    <Typography variant="h2" textAlign="center">
                        {drink.strDrink}
                    </Typography>
                </Grid>

                <Grid item>
                    <img
                        src={drink.strDrinkThumb}
                        alt={drink.strDrink}
                        width={350}
                        height={350}
                        loading="lazy"
                    />
                </Grid>
                <Grid item>
                    <DisplayIngredients ingredients={ingredients} />
                </Grid>
            </Grid>
        );
    };

    return <div>{ingredients && displayDetailedCard()}</div>;
};

export default CocktailDetail;
