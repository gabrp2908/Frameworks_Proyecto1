import React from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/GridView.css';

const GridView = ({ recipes, onRecipeSelect, onEditRecipe }) => {
  if (recipes.length === 0) {
    return (
      <div className="grid-empty">
        <p>🍳 No hay recetas aún. ¡Agrega la primera!</p>
      </div>
    );
  }

  return (
    <div className="grid-view">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={onRecipeSelect}
          onEdit={onEditRecipe}
          viewType="grid"
        />
      ))}
    </div>
  );
};

export default GridView;