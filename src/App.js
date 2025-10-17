import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('grid');

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
      role: 'Nuevo Chef',
      joinDate: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('Users', JSON.stringify(users));
    return true;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem('Auth');
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
        onLogout={handleLogout}
        currentUser={currentUser}
      />
      
      <main className="main-content">
       
      </main>

    </div>
  );
}


export default App;