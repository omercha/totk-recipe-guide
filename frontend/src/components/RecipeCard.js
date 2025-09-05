import { useState } from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const [flipped, setFlipped] = useState(false);
  const [popupData, setPopupData] = useState(null); // { ingredient: ing, position: {x, y} }

  const openPopup = (ing, e) => {
    e.stopPropagation();
    setPopupData(ing);
  };

  const closePopup = () => {
    setPopupData(null);
  };

  const onPopupClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
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
                  <span onClick={(e) => openPopup(ing, e)}>{ing.name}</span>
                  {ing.icon && (
                    <img src={ing.icon} alt={ing.name} width={30} height={30} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {popupData && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={onPopupClick}>
            <button className="popup-close" onClick={closePopup}>×</button>
            <h3>{popupData.name} Specifics</h3>
            <div className="specifics-list">
              {popupData.specifics.map((s, idx) => (
                <div key={idx} className="specific-item">
                  {popupData.icon && (
                    <img src={popupData.icon} alt={popupData.name} width={20} height={20} />
                  )}
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RecipeCard;