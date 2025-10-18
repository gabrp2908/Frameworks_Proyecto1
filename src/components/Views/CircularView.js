import React from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/CircularView.css';

const CircularView = ({ recipes, onRecipeSelect, onEditRecipe }) => {
  if (recipes.length === 0) {
    return (
      <div className="circular-empty">
        <p> No hay recetas aún. ¡Agrega la primera!</p>
      </div>
    );
  }

  return (
    <div className="circular-view">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={onRecipeSelect}
          onEdit={onEditRecipe}
          viewType="circular"
        />
      ))}
    </div>
  );
};

export default CircularView;