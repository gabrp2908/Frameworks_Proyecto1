import React, { useState, useEffect } from 'react';
import '../../styles/RecipeForm.css';

const RecipeForm = ({ recipe, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    ingredients: [{ name: '', quantity: '' }],
    steps: [''],
    notes: ''
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        title: recipe.title || '',
        description: recipe.description || '',
        image: recipe.image || '',
        ingredients: recipe.ingredients && recipe.ingredients.length > 0 
          ? recipe.ingredients 
          : [{ name: '', quantity: '' }],
        steps: recipe.steps && recipe.steps.length > 0 ? recipe.steps : [''],
        notes: recipe.notes || ''
      });
    }
  }, [recipe]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...formData.ingredients];
    updatedIngredients[index][field] = value;
    setFormData(prev => ({
      ...prev,
      ingredients: updatedIngredients
    }));
  };

  const addIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: '', quantity: '' }]
    }));
  };

  const removeIngredient = (index) => {
    if (formData.ingredients.length > 1) {
      setFormData(prev => ({
        ...prev,
        ingredients: prev.ingredients.filter((_, i) => i !== index)
      }));
    }
  };

  const handleStepChange = (index, value) => {
    const updatedSteps = [...formData.steps];
    updatedSteps[index] = value;
    setFormData(prev => ({
      ...prev,
      steps: updatedSteps
    }));
  };

  const addStep = () => {
    setFormData(prev => ({
      ...prev,
      steps: [...prev.steps, '']
    }));
  };

  const removeStep = (index) => {
    if (formData.steps.length > 1) {
      setFormData(prev => ({
        ...prev,
        steps: prev.steps.filter((_, i) => i !== index)
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const filteredData = {
      ...formData,
      ingredients: formData.ingredients.filter(ing => ing.name.trim() !== ''),
      steps: formData.steps.filter(step => step.trim() !== '')
    };

    onSubmit(filteredData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>{recipe ? 'Editar Receta' : 'Nueva Receta'}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Título:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Nombre de la receta"
            />
          </div>

          <div className="form-group">
            <label>Descripción:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              placeholder="Ingrese la descripción de la receta..."
            />
          </div>

          <div className="form-group">
            <label>URL de Imagen:</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              placeholder="https://ejemplo.com/imagen.jpg"
            />
          </div>

          <div className="form-section">
            <h3>Ingredientes</h3>
            {formData.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <input
                  type="text"
                  placeholder="Ingrediente (ej: Harina)"
                  value={ingredient.name}
                  onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Cantidad (ej: 2 tazas)"
                  value={ingredient.quantity}
                  onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeIngredient(index)}
                  disabled={formData.ingredients.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
            <button type="button" onClick={addIngredient} className="add-button">
              Agregar Ingrediente
            </button>
          </div>

          <div className="form-section">
            <h3>Pasos de Preparación</h3>
            {formData.steps.map((step, index) => (
              <div key={index} className="step-row">
                <span className="step-number">{index + 1}.</span>
                <textarea
                  placeholder={`Describe el paso ${index + 1}...`}
                  value={step}
                  onChange={(e) => handleStepChange(index, e.target.value)}
                  rows="2"
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => removeStep(index)}
                  disabled={formData.steps.length === 1}
                >
                  ×
                </button>
              </div>
            ))}
            <button type="button" onClick={addStep} className="add-button">
              Agregar Paso
            </button>
          </div>

          <div className="form-group">
            <label>Notas Extra:</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows="3"
              placeholder="Tips, variaciones, tiempo de cocción..."
            />
          </div>

          <div className="form-actions">
            <button type="button" onClick={onCancel} className="cancel-button">
              Cancelar
            </button>
            <button type="submit" className="submit-button">
              {recipe ? 'Actualizar' : 'Crear'} Receta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecipeForm;