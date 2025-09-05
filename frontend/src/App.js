import './App.css';
import RecipeCard from './components/RecipeCard';
import recipes from './data/recipes';

function App() {

  console.log(recipes);

  return (
    <div className="App">
      <h1 className="Title">Tears of the Kingdom Recipes</h1>
      <div className="recipe-grid">
  {recipes.map(recipe => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))}
</div>
    </div>
  );
}

export default App;