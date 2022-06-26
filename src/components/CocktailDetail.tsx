import { Box } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { IDrink } from "../features/types";
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
                measure: measures[`strMeasure${k.slice(13)}`] ?? ""
            }));
            setIngredients(combined);
            setInstructions(Object.values(instrucs));
        };
        parseDrink(drink);
    }, []);

    const displayDetailedCard = (): JSX.Element => {
        const detail = {
            cocktail: drink,
            ingredients: ingredients,
            instructions: instructions
        };
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mt={20}
            >
                <CocktailCard {...detail} />
            </Box>
        );
    };

    return <div>{ingredients && displayDetailedCard()}</div>;
};

export default CocktailDetail;
