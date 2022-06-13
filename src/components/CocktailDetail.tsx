import { valueToPercent } from '@chakra-ui/utils';
import { List, ListItem } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { IDrink } from '../features/types'

interface CocktailDetailProps {
  drink: IDrink;
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {

  const [ingredients, setIngredients] = useState<string[]>([])
  const [instructions, setInstructions] = useState<string[]>([])

  useEffect(() => {
    const parseDrink = (drink: IDrink) => {
      const vals: string[] = Object.values(drink)
      console.log(vals);
      const filteredIngredients = (val: string) => val.includes("strIngredient");
      const ingreds = vals.filter(filteredIngredients);
      setIngredients(ingreds);
      console.log(ingreds);
      const filteredInstructions = (val: string) => val.includes("strInstruction");
      const instrucs = vals.filter(filteredInstructions);
      console.log(instrucs);
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
