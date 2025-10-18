import React from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/PillsView.css';

const PillsView = ({ recipes, onRecipeSelect, onEditRecipe }) => {
  if (recipes.length === 0) {
    return (
      <div className="pills-empty">
        <p>No hay recetas aún. ¡Agrega la primera!</p>
      </div>
    );
  }

  return (
    <div className="pills-view">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onSelect={onRecipeSelect}
          onEdit={onEditRecipe}
          viewType="pills"
        />
      ))}
    </div>
  );
};

export default PillsView;