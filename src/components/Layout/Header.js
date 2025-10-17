import React from 'react';
import ViewSelector from './ViewSelector';
import '../../styles/Header.css';

const Header = ({ currentView, onViewChange, onAddRecipe, onLogout, currentUser }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="add-button" onClick={onAddRecipe}>
          <span className="plus-icon">+</span>
          Agregar Receta
        </button>
      </div>
      
      <div className="header-center">
        <h1 className="app-title">Blog de Recetas</h1>
        {currentUser && (
          <div className="user-info">
            <small>Su perfil: <strong>{currentUser.username}</strong></small>
          </div>
        )}
      </div>
      
      <div className="header-right">
        <ViewSelector currentView={currentView} onViewChange={onViewChange} />
        <button className="logout-button" onClick={onLogout}>
        Salir ↩︎
        </button>
      </div>
    </header>
  );
};

export default Header;