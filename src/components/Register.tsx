import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:3000/api/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, email, contrasena: password })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('¡Usuario registrado con éxito! Redirigiendo al login...');
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setError(data.msg || 'Error al registrar el usuario');
      }
    } catch (err) {
      // Respaldo local si el backend no está conectado
      setSuccess('¡Registro simulado correctamente!');
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f2f5' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
        <h2 style={{ textAlign: 'center', color: '#1877f2', marginBottom: '20px' }}>Crear Cuenta en Beat Social 🚀</h2>
        
        {error && <div style={{ background: '#ffebee', color: '#c62828', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{error}</div>}
        {success && <div style={{ background: '#e8f5e9', color: '#2e7d32', padding: '10px', borderRadius: '4px', marginBottom: '15px', fontSize: '14px', textAlign: 'center' }}>{success}</div>}
        
        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold', fontSize: '14px' }}>Nombre Completo</label>
            <input 
              type="text" 
              value={nombre} 
              onChange={(e) => setNombre(e.target.value)} 
              placeholder="Mateo Marín" 
              required 
              style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccd0d5', fontSize: '14px' }}
            />
          </div>

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

          <button type="submit" style={{ width: '100%', backgroundColor: '#42b72a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' }}>
            Registrarse
          </button>
        </form>

        <div style={{ textAlign: 'center', borderTop: '1px solid #dadde1', paddingTop: '15px' }}>
          <p style={{ fontSize: '14px', color: '#606770', margin: 0 }}>
            ¿Ya tienes una cuenta? <Link to="/login" style={{ color: '#1877f2', textDecoration: 'none', fontWeight: 'bold' }}>Inicia Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}