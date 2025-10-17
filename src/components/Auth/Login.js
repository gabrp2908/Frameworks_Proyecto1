import React, { useState } from 'react';
import './Login.css';
import chefIcon from '../../styles/assets/cooking_mama.png'; 

const Login = ({ onLogin, onRegister }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLoginMode) {
      handleLogin();
    } else {
      handleRegister();
    }
  };

  const handleLogin = () => {
    if (onLogin(credentials)) {
      setError('');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleRegister = () => {
    if (credentials.password !== credentials.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    
    if (credentials.password.length < 4) {
      setError('La contraseña debe tener al menos 4 caracteres');
      return;
    }
    
    if (onRegister(credentials)) {
      setSuccess('¡Usuario registrado exitosamente!');
      setTimeout(() => {
        setIsLoginMode(true);
        resetForm();
      }, 2000);
    } else {
      setError('El usuario ya existe');
    }
  };

  const handleChange = (e) => {
    setCredentials(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const switchMode = () => {
    setIsLoginMode(!isLoginMode);
    setError('');
    setSuccess('');
    resetForm();
  };

  const resetForm = () => {
    setCredentials({ username: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Blog de Recetas</h1>
          <h2>Proyecto 1 - Manejo de Frameworks</h2>
          <div className="icon">
            <img src={chefIcon} alt="Chef" />
          </div>
          <h2>{isLoginMode ? 'Iniciar Sesión' : 'Registrar Usuario'}</h2>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <InputField
            label="Usuario:"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            placeholder="Ingresa tu usuario"
            required
          />
          
          <InputField
            label="Contraseña:"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Ingresa tu contraseña"
            minLength="4"
            required
          />
          
          {!isLoginMode && (
            <InputField
              label="Confirmar Contraseña:"
              type="password"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleChange}
              placeholder="Confirma tu contraseña"
              minLength="4"
              required
            />
          )}
          
          <Message type="error" text={error} />
          <Message type="success" text={success} />
          
          <button type="submit" className="login-button">
            {isLoginMode ? 'Ingresar' : 'Registrar Usuario'}
          </button>
        </form>
        
        <div className="switch-mode">
          <p>
            {isLoginMode ? '¿No tienes cuenta? ' : '¿Ya tienes cuenta? '}
            <button type="button" className="switch-button" onClick={switchMode}>
              {isLoginMode ? 'Regístrate aquí' : 'Inicia sesión aquí'}
            </button>
          </p>
        </div>

        {isLoginMode && (
          <div className="login-hint">
            <p>Usuarios de prueba: <strong>admin</strong> / <strong>1234</strong></p>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, type, name, value, onChange, placeholder, required, minLength }) => (
  <div className="input-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      minLength={minLength}
    />
  </div>
);

const Message = ({ type, text }) => {
  if (!text) return null;
  return <div className={`${type}-message`}>{text}</div>;
};

export default Login;