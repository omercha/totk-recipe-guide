import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { getAllRecipes } from '../services/recipeService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (e) {
        console.error("An error occurred in the component:", e);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;

  return <RecipeList recipes={recipes} />;
};

export default Recipes;