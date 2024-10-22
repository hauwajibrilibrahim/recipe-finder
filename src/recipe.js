import React from 'react';

const Recipe = ({ title, image, ingredients, dietLabels, healthLabels, calories, totalTime }) => {
  return (
    <div className="recipe">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      
      {/* Additional Information */}
      <div className="recipe-info">
        {dietLabels.length > 0 && (
          <p><strong>Diet Labels:</strong> {dietLabels.join(', ')}</p>
        )}

        {healthLabels.length > 0 && (
          <p><strong>Health Labels:</strong> {healthLabels.join(', ')}</p>
        )}

        {calories && (
          <p><strong>Calories:</strong> {Math.round(calories)} kcal</p>
        )}

        {totalTime ? (
          <p><strong>Total Time:</strong> {totalTime} minutes</p>
        ) : (
          <p><strong>Total Time:</strong> N/A</p>
        )}
      </div>
    </div>
  );
};

export default Recipe;
