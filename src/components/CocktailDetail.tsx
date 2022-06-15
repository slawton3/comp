import { valueToPercent } from '@chakra-ui/utils';
import { List, ListItem } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { IDrink } from '../features/types'

interface CocktailDetailProps {
  drink: IDrink;
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {

  const [ingredients, setIngredients] = useState({})
  const [instructions, setInstructions] = useState({})

  useEffect(() => {
    const parseDrink = (drink: IDrink) => {
      const ingreds = Object.fromEntries(Object.entries(drink).filter(([key]) => key.includes('strIngredient')));
      const instrucs = Object.fromEntries(Object.entries(drink).filter(([key]) => key.includes('strInstructions')));
      
      setIngredients(ingreds)
      setInstructions(instrucs);
    };
    parseDrink(drink);
  }, [])

  return (
    <List>
      
    </List>
  )
}

export default CocktailDetail;
