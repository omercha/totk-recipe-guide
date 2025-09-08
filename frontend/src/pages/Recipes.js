import recipes from "../data/recipes";
import "./Recipes.css";

function Recipes() {
  return (
    <div className="recipes-page">
      <h1 className="recipes-title"></h1>
      <div className="recipes-table-container">
        <table className="recipes-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Ingredients</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe) => (
              <tr key={recipe.id}>
                <td>{recipe.id}</td>
                <td>
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="recipe-image"
                  />
                </td>
                <td>{recipe.name}</td>
                <td>
                  <ul>
                    {recipe.ingredients.map((ingredient, idx) => (
                      <li key={idx}>{ingredient}</li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Recipes;