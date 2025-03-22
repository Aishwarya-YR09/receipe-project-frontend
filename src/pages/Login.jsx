import React, { useState } from 'react';

// LoginPage Component
export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    alert('Login attempt submitted!');
  };

  return (
    <div style={{ 
        maxWidth: '400px', 
        margin: '50px auto', 
        padding: '20px', 
        border: '2px solid #0288d1', 
        borderRadius: '15px', 
        backgroundColor: '#e1f5fe', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
      }}>
      <h2 style={{ textAlign: 'center', color: '#01579b' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#0277bd' }}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #81d4fa', 
              backgroundColor: '#f1f8e9', 
              color: '#004d40' 
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#0277bd' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%', 
              padding: '10px', 
              borderRadius: '5px', 
              border: '1px solid #81d4fa', 
              backgroundColor: '#f1f8e9', 
              color: '#004d40' 
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%', 
            padding: '10px', 
            backgroundColor: '#0288d1', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontWeight: 'bold',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)'
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

// Parent Component
export const Login = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};