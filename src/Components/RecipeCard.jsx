import React from 'react';
import { Link } from 'react-router-dom';

function RecipeCard({ recipe }) {
  const { image, label, cuisineType, dietLabels, mealType, uri } = recipe?.recipe;
  const id = uri?.split("#")[1];

  

  return (
    <Link to={`/recipes/${id}`} className='w-full md:w-[220px]'>
      <div className='bg-gradient shadow w-full rounded-lg'>
        <img
          src={image}
          alt={`Image of ${label}`}
          className='rounded-t-lg object-cover h-48 md:h-36 lg:h-40 w-full'
        />

        <div className='p-4'>
          <p className='text-white font-semibold text-lg mb-2'>{label}</p>

          <div className='flex flex-wrap'>
            <span className='px-2 py-1 text-xs capitalize bg-[#0c452243] shadow-xl rounded-full mr-2 mb-2 text-green-500'>
              {cuisineType}
            </span>
            {dietLabels &&
              dietLabels.length > 0 &&
              dietLabels.map((dietLabel, index) => (
                <span
                  key={index}
                  className='px-2 py-1 text-xs capitalize bg-[#0c452243] shadow-xl rounded-full mr-2 mb-2 text-green-500'
                >
                  {dietLabel}
                </span>
              ))}
            <span className='px-2 py-1 text-xs capitalize bg-[#0c452243] shadow-xl rounded-full mb-2 text-green-500'>
              {mealType}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RecipeCard;
