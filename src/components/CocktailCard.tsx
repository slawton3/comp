import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IDrink } from '../features/types';

export default function CocktailCard({ cocktail }: any) {
  console.log(cocktail.cocktail)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
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
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}