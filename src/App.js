import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import RecipeForm from './components/Recipe/RecipeForm';
import RecipeModal from './components/Recipe/RecipeModal';
import CarouselView from './components/Views/CarouselView';
import CircularView from './components/Views/CircularView';
import GridView from './components/Views/GridView';
import PillsView from './components/Views/PillsView';
import sampleRecipes from './data/sampleRecipes'; 
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('grid');
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showRecipeForm, setShowRecipeForm] = useState(false);
  const [editingRecipe, setEditingRecipe] = useState(null);

  // Sistema de usuarios
  const getStoredUsers = () => {
    const users = localStorage.getItem('Users');
    return users ? JSON.parse(users) : [
      { username: 'admin', password: '1234', role: 'Admin', joinDate: new Date().toISOString() }
    ];
  };

  const handleLogin = (credentials) => {
    const users = getStoredUsers();
    const user = users.find(
      user => user.username === credentials.username && user.password === credentials.password
    );
    
    if (user) {
      setCurrentUser(user);
      setIsAuthenticated(true);
      localStorage.setItem('Auth', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const handleRegister = (credentials) => {
    const users = getStoredUsers();
    
    // Verificar si el usuario ya existe
    if (users.find(user => user.username === credentials.username)) {
      return false;
    }
    
    // Agregar nuevo usuario
    const newUser = {
      username: credentials.username,
      password: credentials.password,
      joinDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('Users', JSON.stringify(users));
    return true;
  };

  useEffect(() => {
    const savedRecipes = localStorage.getItem('cookingRecipes');
    const savedAuth = localStorage.getItem('cookingAuth');
    
    if (savedRecipes) {
      try {
        const parsedRecipes = JSON.parse(savedRecipes);
        setRecipes(Array.isArray(parsedRecipes) ? parsedRecipes : sampleRecipes);
      } catch (error) {
        console.error('Error parsing recipes:', error);
        setRecipes(sampleRecipes);
      }
    } else {
      setRecipes(sampleRecipes);
      localStorage.setItem('cookingRecipes', JSON.stringify(sampleRecipes));
    }
    
    if (savedAuth) {
      try {
        const user = JSON.parse(savedAuth);
        setCurrentUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing auth:', error);
        localStorage.removeItem('cookingAuth');
      }
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('Auth');
  };

  const handleAddRecipe = (recipeData) => {
    const newRecipe = {
      id: Date.now().toString(),
      ...recipeData,
      createdAt: new Date().toISOString(),
      createdBy: currentUser?.username || 'Anónimo'
    };
    const updatedRecipes = [...recipes, newRecipe];
    setRecipes(updatedRecipes);
    localStorage.setItem('cookingRecipes', JSON.stringify(updatedRecipes));
    setShowRecipeForm(false);
  };

  const handleUpdateRecipe = (recipeData) => {
    const updatedRecipes = recipes.map(recipe =>
      recipe.id === editingRecipe.id ? { ...recipe, ...recipeData } : recipe
    );
    setRecipes(updatedRecipes);
    localStorage.setItem('cookingRecipes', JSON.stringify(updatedRecipes));
    setShowRecipeForm(false);
    setEditingRecipe(null);
  };

  const handleDeleteRecipe = (recipeId) => {
    const updatedRecipes = recipes.filter(recipe => recipe.id !== recipeId);
    setRecipes(updatedRecipes);
    localStorage.setItem('cookingRecipes', JSON.stringify(updatedRecipes));
    setSelectedRecipe(null);
  };

  const handleEditRecipe = (recipe) => {
    setEditingRecipe(recipe);
    setShowRecipeForm(true);
    setSelectedRecipe(null);
  };

  const resetToSampleRecipes = () => {
    setRecipes(sampleRecipes);
    localStorage.setItem('cookingRecipes', JSON.stringify(sampleRecipes));
    alert('¡Recetas de ejemplo cargadas!');
  };

  const renderView = () => {
    if (!recipes || !Array.isArray(recipes)) {
      return (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>Error: No se pudieron cargar las recetas</p>
          <button onClick={resetToSampleRecipes}>Reintentar</button>
        </div>
      );
    }

    const viewProps = {
      recipes,
      onRecipeSelect: setSelectedRecipe,
      onEditRecipe: handleEditRecipe
    };

    switch (currentView) {
      case 'carousel':
        return <CarouselView {...viewProps} />;
      case 'circular':
        return <CircularView {...viewProps} />;
      case 'grid':
        return <GridView {...viewProps} />;
      case 'pills':
        return <PillsView {...viewProps} />;
      default:
        return <GridView {...viewProps} />;
    }
  };

  if (!isAuthenticated) {
    return (
      <Login 
        onLogin={handleLogin} 
        onRegister={handleRegister}
      />
    );
  }
  
  return (
    <div className="app">
      <Header
        currentView={currentView}
        onViewChange={setCurrentView}
        onAddRecipe={() => setShowRecipeForm(true)}
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      
      <main className="main-content">
        {renderView()}
      </main>

      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          onEdit={handleEditRecipe}
          onDelete={handleDeleteRecipe}
        />
      )}

      {showRecipeForm && (
        <RecipeForm
          recipe={editingRecipe}
          onSubmit={editingRecipe ? handleUpdateRecipe : handleAddRecipe}
          onCancel={() => {
            setShowRecipeForm(false);
            setEditingRecipe(null);
          }}
        />
      )}
    </div>
  );
}

export default App;