import React, { useState } from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/CarouselView.css';

const CarouselView = ({ recipes, onRecipeSelect, onEditRecipe }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextRecipe = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === recipes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRecipe = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recipes.length - 1 : prevIndex - 1
    );
  };

  if (recipes.length === 0) {
    return (
      <div className="carousel-empty">
        <p>🍳 No hay recetas aún. ¡Agrega la primera!</p>
      </div>
    );
  }

  return (
    <div className="carousel-view">
      <button className="carousel-arrow left-arrow" onClick={prevRecipe}>
        ‹
      </button>
      
      <div className="carousel-container">
        <RecipeCard
          recipe={recipes[currentIndex]}
          onSelect={onRecipeSelect}
          onEdit={onEditRecipe}
          viewType="carousel"
        />
      </div>
      
      <button className="carousel-arrow right-arrow" onClick={nextRecipe}>
        ›
      </button>
      
      <div className="carousel-indicators">
        {recipes.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      
      <div className="carousel-counter">
        {currentIndex + 1} / {recipes.length}
      </div>
    </div>
  );
};

export default CarouselView;