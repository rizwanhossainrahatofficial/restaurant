import React from 'react';
import { Link } from 'react-router-dom';
import MealDetail from '../MealDetail/MealDetail';

const Header = () => {
    return (
        <div >
            <nav style={{marginLeft:'100px',padding:'10px' }}>
                <Link style={{textDecoration:'none',color:'black'}} to="/home">Home</Link>
               
               
            </nav>
        </div>
    );
};

export default Header;