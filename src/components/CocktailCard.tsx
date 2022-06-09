import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IDrink } from '../features/types';

interface ICocktail {
  "cocktail": IDrink;
}

export default function CocktailCard(cocktail: ICocktail) {
  return (
    <Card sx={{ maxWidth: 345 }}>
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}