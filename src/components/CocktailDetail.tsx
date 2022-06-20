
import { Box, Checkbox, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { IDrink } from '../features/types'
import ListIngredients from './CocktaiDetail/ListIngredients';
import CocktailCard from './CocktailCard';
interface CocktailDetailProps {
  drink: IDrink;
}
interface ICocktail {
  "cocktail": IDrink;
  "ingredients"?: string[];
  "instructions"?: string[] 
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {

  const [ingredients, setIngredients] = useState<string[]>([])
  const [instructions, setInstructions] = useState<string[]>([])

  useEffect(() => {
    const parseDrink = (drink: IDrink) => {
      const ingreds = Object.fromEntries(Object.entries(drink).filter(([key, value]) => key.includes('strIngredient') && value !== null));
      const instrucs = Object.fromEntries(Object.entries(drink).filter(([key, value]) => key.includes('strInstructions') && value !== null));
      
      setIngredients(Object.values(ingreds))
      setInstructions(Object.values(instrucs));
    };
    parseDrink(drink);
  }, [])

  const displayDetailedCard = (): JSX.Element => {
      const detail = { cocktail: drink, ingredients: ingredients, instructions: instructions }
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
