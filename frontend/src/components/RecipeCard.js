import { useState } from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const [flipped, setFlipped] = useState(false);
  const [activeSpecific, setActiveSpecific] = useState(null); // index of ingredient clicked

  const toggleSpecifics = (i, e) => {
    e.stopPropagation();
    setActiveSpecific(activeSpecific === i ? null : i);
  }; 

  return (
    <div
      className={`recipe-card${flipped ? " flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        <div className="card-front">
          <p className="recipe-id">{recipe.id}</p>
          <img src={recipe.image} alt={recipe.name} />
          <h2 className="recipe-name">{recipe.name}</h2>
        </div>
        
        <div className="card-back">
          <div className="ingredients-list">
            {recipe.ingredients.map((ing, i) => (
              <div
                key={i}
                className="ingredient-item"
              >
                <span onClick={(e) => toggleSpecifics(i, e)}>{ing.name}</span>
                {ing.icon && (
                  <img src={ing.icon} alt={ing.name} width={30} height={30} />
                )}

                {activeSpecific === i && (
                  <div className="specifics-list">
                    {ing.specifics.map((s, idx) => (
                      <div key={idx} className="specific-item">{s}</div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;