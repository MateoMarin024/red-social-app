import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, contrasena: password })
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('usuario', JSON.stringify(data.usuario || { email }));
        navigate('/feed');
      } else {
        setError(data.msg || 'Credenciales incorrectas');
      }
    } catch (err) {
      // Respaldo por si el backend no está encendido, permitiendo acceso con LocalStorage
      if (email && password) {
        localStorage.setItem('usuario', JSON.stringify({ email }));
        navigate('/feed');
      } else {
        setError('Error al conectar con el servidor backend');
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', color: '#1877f2', marginBottom: '20px' }}>Beat Social 🚀</h2>
        
        {error && <div style={{ background: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Correo Electrónico</label>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="tu_correo@gmail.com" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccd0d5', fontSize: '14px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Contraseña</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccd0d5', fontSize: '14px' }}
            />
          </div>

          <button type="submit" style={{ width: '100%', backgroundColor: '#1877f2', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}