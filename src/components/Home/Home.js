import React, { useState,useEffect } from 'react';
import Meals from '../Meals/Meals';

const Home = () => {
    const [searchText,setSearchText]=useState('')
    const [meals,setMeals]=useState([])

    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
     fetch(url)
     .then(res=>res.json())
     .then(data=>setMeals(data.meals))
    },[searchText])
   
    const handleSearch=e=>{
        const searchTextValue=e.target.value
        setSearchText(searchTextValue)
}
    return (
        <div>
            <div style={{marginLeft:'500px'}}>
            <input style={{padding:'5px',borderRadius:'10px'}} onChange={handleSearch} placeholder='search food ' type="text" />
            </div>
            {
                meals.map(meal=><Meals meal={meal} ></Meals>)
            }
        </div>
    );
};

export default Home;