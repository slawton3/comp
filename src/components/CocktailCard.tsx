import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IDrink } from "../features/types";
import { styled } from "@mui/material";
import ListIngredients from "./CocktaiDetail/ListIngredients";

interface IIngredients {
    ingredient: string;
    measure: string;
}
interface ICocktail {
    cocktail: IDrink;
    ingredients?: Array<IIngredients>;
    instructions?: string[];
}

const StyledCard = styled(Card)({
    maxWidth: 345,
    borderRadius: 10,
    backgroundSize: "200%",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    transition: "0.6s",
    textAlign: "center",
    backgroundImage: "linear-gradient(#9f7928, #8A6E2F, #bb9b49)",
    "&:hover": {
        backgroundPosition: "right"
    }
});

export default function CocktailCard({
    cocktail,
    ingredients,
    instructions
}: ICocktail) {
    const createDetailedCard = (
        ingredients: Array<IIngredients>,
        instructions: string[]
    ) => {
        return (
            <div>
                <StyledCard>
                    <CardMedia
                        component="img"
                        alt={cocktail?.strDrink}
                        height="140"
                        image={cocktail?.strDrinkThumb}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cocktail?.strDrink}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cocktail?.strIBA}
                        </Typography>
                    </CardContent>
                    <Typography variant="h5" color="text.secondary">
                        Ingredients
                    </Typography>
                    <CardContent>
                        <ListIngredients ingredients={ingredients} />
                    </CardContent>
                    <Typography variant="h5" color="text.secondary">
                        Instructions
                    </Typography>
                </StyledCard>
            </div>
        );
    };

    const createStandardCard = () => {
        return (
            <div>
                <StyledCard>
                    <CardMedia
                        component="img"
                        alt={cocktail?.strDrink}
                        height="140"
                        image={cocktail?.strDrinkThumb}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {cocktail?.strDrink}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {cocktail?.strIBA}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Ingredients</Button>
                    </CardActions>
                </StyledCard>
            </div>
        );
    };

    return (
        <div>
            {ingredients && instructions
                ? createDetailedCard(ingredients, instructions)
                : createStandardCard()}
        </div>
    );
}
