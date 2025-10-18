import React from 'react';
import '../../styles/RecipeCard.css';

const RecipeCard = ({ recipe, onSelect, onEdit, viewType = 'grid' }) => {
  const handleClick = () => {
    onSelect(recipe);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    onEdit(recipe);
  };

  const getDefaultImage = () => {
    return 'https://media.istockphoto.com/id/533837393/es/foto/payaso.jpg?s=612x612&w=0&k=20&c=x90RAkaZXoE5lqccTYwFLtyVtepTf8xVXY6AdXDPFZs=';
  };

  const renderContent = () => {
    switch (viewType) {
      case 'carousel':
        return (
          <div className="recipe-card carousel-card">
            <div className="recipe-image-container">
              <img 
                src={recipe.image || getDefaultImage()} 
                alt={recipe.title}
                className="recipe-image"
                onError={(e) => {
                  e.target.src = getDefaultImage();
                }}
              />
            </div>
            <h3 className="recipe-title">{recipe.title}</h3>
          </div>
        );
      
      case 'circular':
        return (
          <div className="recipe-card circular-card">
            <div className="circular-image-container">
              <img 
                src={recipe.image || getDefaultImage()} 
                alt={recipe.title}
                className="circular-image"
                onError={(e) => {
                  e.target.src = getDefaultImage();
                }}
              />
            </div>
            <div className="circular-title">
              <span>{recipe.title}</span>
            </div>
          </div>
        );
      
      case 'pills':
        return (
          <div className="recipe-card pills-card">
            <span className="pills-title">{recipe.title}</span>
          </div>
        );
      
      default: // grid
        return (
          <div className="recipe-card grid-card">
            <div className="recipe-image-container">
              <img 
                src={recipe.image || getDefaultImage()} 
                alt={recipe.title}
                className="recipe-image"
                onError={(e) => {
                  e.target.src = getDefaultImage();
                }}
              />
              <div className="card-overlay">
                <button className="view-details-button">
                  👁️ Ver Más
                </button>
              </div>
            </div>
            <div className="card-footer">
              <h3 className="recipe-title">{recipe.title}</h3>
            </div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`recipe-item ${viewType}`}
      onClick={handleClick}
    >
      {renderContent()}
      {viewType !== 'pills' && (
        <button 
          className="edit-recipe-button"
          onClick={handleEditClick}
          title="Editar receta"
        >
          ✎
        </button>
      )}
    </div>
  );
};

export default RecipeCard;