
import { Box } from '@mui/material';
import { FC, useEffect, useState } from 'react'
import { IDrink } from '../features/types'
import CocktailCard from './CocktailCard';
interface CocktailDetailProps {
  drink: IDrink;
}

interface IIngredients {
  ingredient: string,
  measure: string,
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [measures, setMeasures] = useState<string[]>([]);

  useEffect(() => {
    const parseDrink = (drink: IDrink) => {
      const ingreds = Object.fromEntries(Object.entries(drink).filter(([key, value]) => key.includes('strIngredient') && value !== null));
      const instrucs = Object.fromEntries(Object.entries(drink).filter(([key, value]) => key === 'strInstructions' && value !== null));
      const measure = Object.fromEntries(Object.entries(drink).filter(([key, value]) => key.includes('strMeasure') && value !== null));

      setIngredients(Object.values(ingreds))
      setInstructions(Object.values(instrucs));
      setMeasures(Object.values(measure));
    };
    parseDrink(drink);
  }, [])

  const displayDetailedCard = (): JSX.Element => {
      let ingredientMeasures:  = []
      const combine = () => {
        for(let i of ingredients){
            ingredientMeasures.push{ingredient: ingredients[i], measure: measures[i]};
        }
      }
      const detail = { 
                      cocktail: drink, 
                      ingredients: ingredients,
                      instructions: instructions, 
                      measures: measures 
                    }
      return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mt={20}
          >

          <CocktailCard {...detail} />
        </Box>
      )
  }

  return (
    <div>
      {ingredients && displayDetailedCard()}
    </div>
  )
}

export default CocktailDetail;
