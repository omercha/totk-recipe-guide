import {useState} from 'react';
import './RecipeCard.css';

function RecipeCard({ recipe }) {

  return (
    <div className="recipe-card">
      <p className="recipe-id">{recipe.id}</p>
      <img src={recipe.image} alt={recipe.name} />
      <h2 className="recipe-name">{recipe.name}</h2>
      {/* Optional: Button for more details */}
    </div>
  );
}

export default RecipeCard;