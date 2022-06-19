import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IDrink } from '../features/types';
import { styled } from '@mui/material';

interface ICocktail {
  "cocktail": IDrink;
  "ingredients"?: string[];
  "instructions"?: string[] 
}

const StyledCard = styled(Card)({
    maxWidth: 345,
    borderRadius: 10,
    backgroundSize: '200%',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    transition: '0.6s',
    backgroundImage: 'linear-gradient(#9f7928, #8A6E2F, #bb9b49)',
    '&:hover': {
      backgroundPosition: 'right'
  }
})

export default function CocktailCard(cocktail: ICocktail) {
  return (
    <StyledCard>
      <CardMedia
        component="img"
        alt={cocktail.cocktail.strDrink}
        height="140"
        image={cocktail?.cocktail.strDrinkThumb}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cocktail?.cocktail.strDrink}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {cocktail?.cocktail.strIBA}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Ingredients</Button>
      </CardActions>
    </StyledCard>
    
  );
}