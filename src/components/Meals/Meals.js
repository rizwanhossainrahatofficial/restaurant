import React, { useEffect, useState } from 'react';
import { Box,Button,Card,CardActions,CardContent,CardMedia,Grid, Typography  } from '@mui/material';
import Meal from '../Meal/Meal';
import Paper from '@mui/material/Paper';
import './Meals.css'
import { useNavigate } from 'react-router-dom';

const Meals = (props) => {
    // console.log(props.meal.idMeal)
    const { strMeal,strMealThumb,strIngredient1,strIngredient2,idMeal } = props.meal

    const navigate=useNavigate()
    const handleclick=()=>{
        navigate(`/meal/${idMeal}`)
    }
    return (
        <div className='card' >
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={strMealThumb}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {strMeal}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p> 1.{strIngredient1}  2.{strIngredient2}
               
          </p>
        </Typography>
      </CardContent>
      <CardActions> 

        <Button onClick={handleclick} size="small">More information</Button>
        
      </CardActions>
    </Card>
        </div>
    );
};

export default Meals;