import React from 'react';
import '../../styles/RecipeModal.css';

const RecipeModal = ({ recipe, onClose, onEdit, onDelete }) => {
  if (!recipe) return null;

  const getDefaultImage = () => {
    return 'https://media.istockphoto.com/id/533837393/es/foto/payaso.jpg?s=612x612&w=0&k=20&c=x90RAkaZXoE5lqccTYwFLtyVtepTf8xVXY6AdXDPFZs=';
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <div className="modal-image-container">
            <img 
              src={recipe.image || getDefaultImage()} 
              alt={recipe.title}
              onError={(e) => {
                e.target.src = getDefaultImage();
              }}
            />
          </div>
          <div className="modal-title-section">
            <h2>{recipe.title}</h2>
            <p className="recipe-description">{recipe.description || 'Una deliciosa receta para disfrutar.'}</p>
          </div>
        </div>

        <div className="modal-body">
          <div className="ingredients-section">
            <h3>Ingredientes</h3>
            <ul className="ingredients-list">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="ingredient-name">{ingredient.name}</span>
                  <span className="ingredient-quantity">{ingredient.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="steps-section">
            <h3>Pasos a Seguir</h3>
            <ol className="steps-list">
              {recipe.steps && recipe.steps.map((step, index) => (
                <li key={index} className="step-item">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {recipe.notes && (
            <div className="notes-section">
              <h3>Notas Extra</h3>
              <p>{recipe.notes}</p>
            </div>
          )}
        </div>

        <div className="modal-actions">
          <button className="edit-button" onClick={() => onEdit(recipe)}>
            Editar
          </button>
          <button className="delete-button" onClick={() => {
            if (window.confirm('¿Estás seguro de que quieres eliminar esta receta?')) {
              onDelete(recipe.id);
            }
          }}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;