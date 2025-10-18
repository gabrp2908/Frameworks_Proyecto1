import React, { useState } from 'react';
import RecipeCard from '../Recipe/RecipeCard';
import '../../styles/CarouselView.css';

const CarouselView = ({ recipes, onRecipeSelect, onEditRecipe }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState('');

  const changeRecipe = (newIndex, direction) => {
    setAnimationClass(`slide-out-${direction}`);
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimationClass(`slide-in-${direction}`);
    }, 250);
  };

  const nextRecipe = () => {
    const newIndex = currentIndex === recipes.length - 1 ? 0 : currentIndex + 1;
    changeRecipe(newIndex, 'left');
  };

  const prevRecipe = () => {
    const newIndex = currentIndex === 0 ? recipes.length - 1 : currentIndex - 1;
    changeRecipe(newIndex, 'right');
  };

  const goToRecipe = (index) => {
    const direction = index > currentIndex ? 'left' : 'right';
    changeRecipe(index, direction);
  };

  if (recipes.length === 0) {
    return (
      <div className="carousel-empty">
        <p>No hay recetas aún. ¡Agrega la primera!</p>
      </div>
    );
  }

  return (
    <div className="carousel-view">
      <button 
        className="carousel-arrow left-arrow" 
        onClick={prevRecipe}
        title="Receta anterior"
      >
        ‹
      </button>
      
      <div className={`carousel-container ${animationClass}`}>
        <RecipeCard
          recipe={recipes[currentIndex]}
          onSelect={onRecipeSelect}
          onEdit={onEditRecipe}
          viewType="carousel"
        />
      </div>
      
      <button 
        className="carousel-arrow right-arrow" 
        onClick={nextRecipe}
        title="Siguiente receta"
      >
        ›
      </button>
      
      <div className="carousel-indicators">
        {recipes.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToRecipe(index)}
            title={`Ir a receta ${index + 1}`}
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