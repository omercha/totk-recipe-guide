import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { getAllRecipes } from '../services/RecipeService';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipes() {
      const data = await getAllRecipes();
      setRecipes(data);
      setLoading(false);
    }
    fetchRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;

  return <RecipeList recipes={recipes} />;
}

export default Recipes;