import { List, ListItem, ListItemButton, ListItemIcon, Checkbox, ListItemText } from '@mui/material';
import React, { useState } from 'react'

interface IIngredientsListProps {
    ingredients: string[];
  }

const ListIngredients = ({ ingredients }: IIngredientsListProps): JSX.Element => {

    const [checked, setChecked] = useState<number[]>([0])
    
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

  return (
    <div>
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
    </div>
  )
}

export default ListIngredients