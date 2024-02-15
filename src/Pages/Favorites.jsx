import React, { useEffect, useState } from 'react';
import NavBar from '../Components/NavBar';
import Header from '../Components/Header';
import RecipeCard from '../Components/RecipeCard';
import { Link } from 'react-router-dom';

function Favorites() {


  return (
    <div className='w-full'>
      <NavBar />
      <Header title={<p>Test the World with <br />FlavorVerse!</p>} type='home' />
      <div className='w-full'>
        <div className='w-full flex items-center justify-center pt-10 pb-5 px-0 md:px-10'>
          <h1 className='text-2xl font-bold mb-4 text-white'>Favorite Recipes</h1>
        </div>

        <div className='w-full px-4 lg:px-20'>
      
        
        </div>
      </div>
    </div>
  );
}

export default Favorites;
