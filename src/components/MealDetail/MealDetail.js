import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MealDetails.css'

const MealDetail = () => {
    const { mealId } = useParams()
    console.log(mealId)
    const [details, setDetails] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])
   console.log(details.strIngredient1)
   const navigate=useNavigate()
   const handleClick=()=>{
    navigate(`/home`)
   }

    return (
        <div >
            <div className='Meal-detail'>
            <h1>Ingredient1</h1>
          
            <p>1.{details.strIngredient1}</p>
            <p>2.{details.strIngredient2}</p>
            <p>3.{details.strIngredient3}</p>
            <p>4.{details.strIngredient4}</p>
            <p> <b>Cooking process:</b> {details.strInstructions}</p>
           <button onClick={handleClick}> See all meals</button>
           </div>
       </div>

                );
};

                export default MealDetail;