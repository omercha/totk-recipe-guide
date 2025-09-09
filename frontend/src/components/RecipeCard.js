import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} className="recipe-card-image" />
      <div className="recipe-card-body">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <ul className="recipe-card-ingredients">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCard;
