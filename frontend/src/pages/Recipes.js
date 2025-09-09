import React, { useState, useEffect } from 'react';
import RecipeList from '../components/RecipeList';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
        const apiUrl = `${baseUrl}/api/recipes`;
        console.log(`Fetching recipes from: ${apiUrl}`);

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setRecipes(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div>Error: {error}</div>;

  return <RecipeList recipes={recipes} />;
};

export default Recipes;