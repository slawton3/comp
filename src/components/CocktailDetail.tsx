
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, useEffect, useState } from 'react'
import { IDrink } from '../features/types'

interface CocktailDetailProps {
  drink: IDrink;
}

const CocktailDetail: FC<CocktailDetailProps> = ({ drink }) => {

  const [ingredients, setIngredients] = useState<string[]>([])
  const [instructions, setInstructions] = useState<string[]>([])
  const [checked, setChecked] = useState<number[]>([0])

  useEffect(() => {
    const parseDrink = (drink: IDrink) => {
      const ingreds = Object.fromEntries(Object.entries(drink).filter(([key]) => key.includes('strIngredient')));
      const instrucs = Object.fromEntries(Object.entries(drink).filter(([key]) => key.includes('strInstructions')));
      
      setIngredients(Object.values(ingreds))
      setInstructions(Object.values(instrucs));
    };
    parseDrink(drink);
  }, [])

  const handleToggle = (value: number) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if(currentIndex === -1) {
      newChecked.push(value);
    }
    else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  }

  const getIngredients = (): JSX.Element => {
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {ingredients.map((ingredient, idx) => {
          const labelId = `checkbox-list-label-${ingredient}`;

          return (
            <ListItem
              key={idx}
              disablePadding
            >
              <ListItemButton role={undefined} onClick={() => handleToggle(idx)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={ingredient} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    )
  }

  return (
    <div>
      {ingredients && getIngredients()}
    </div>
  )
}

export default CocktailDetail;
