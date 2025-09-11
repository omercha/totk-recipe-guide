import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';
import { getAllRecipes } from '../services/recipeService';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This function now uses the recipeService to fetch local data
    const fetchRecipes = async () => {
      try {
        const data = await getAllRecipes();
        setRecipes(data);
      } catch (e) {
        // The service already logs the error, so we can just ensure recipes is an empty array
        console.error("An error occurred in the component:", e);
        setRecipes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []); // The empty dependency array ensures this runs only once on mount

  if (loading) return <div>Loading recipes...</div>;

  return <RecipeList recipes={recipes} />;
};

export default Recipes;