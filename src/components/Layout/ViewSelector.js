import React from 'react';
import './ViewSelector.css';

const ViewSelector = ({ currentView, onViewChange }) => {
  const views = [
    { id: 'carousel', label: 'Desplazado', icon: '⇄' },
    { id: 'circular', label: 'Circular', icon: '⭕' },
    { id: 'grid', label: 'Cuadriculada', icon: '◼️' },
    { id: 'pills', label: 'Pills', icon: '🔘' }
  ];

  return (
    <div className="view-selector">
      <select 
        value={currentView} 
        onChange={(e) => onViewChange(e.target.value)}
        className="view-dropdown"
      >
        {views.map(view => (
          <option key={view.id} value={view.id}>
            {view.icon} {view.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ViewSelector;