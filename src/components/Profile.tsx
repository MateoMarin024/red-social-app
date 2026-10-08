import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Profile() {
  const navigate = useNavigate();

  return (
    <div className="w3-light-grey" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <Navbar />
      
      <div className="w3-container" style={{ maxWidth: '900px', marginTop: '100px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="w3-card w3-white w3-round" style={{ padding: '20px' }}>
          <div className="w3-container w3-center">
            <h2>Perfil de Usuario</h2>
            <p className="w3-opacity">Información de tu cuenta en Beat Social</p>
            
            <img 
              src="https://www.w3schools.com/w3images/avatar2.png" 
              className="w3-circle" 
              style={{ height: '120px', width: '120px', margin: '20px 0' }} 
              alt="Avatar" 
            />
            
            <hr />
            
            <div style={{ textAlign: 'left', maxWidth: '500px', margin: '0 auto', fontSize: '16px' }}>
              <p><strong><i className="fa fa-user fa-fw w3-text-theme"></i> Nombre:</strong> Mateo Marín</p>
              <p><strong><i className="fa fa-envelope fa-fw w3-text-theme"></i> Correo:</strong> prueba123@gmail.com</p>
              <p><strong><i className="fa fa-pencil fa-fw w3-text-theme"></i> Ocupación:</strong> Frontend Developer & Estudiante</p>
              <p><strong><i className="fa fa-home fa-fw w3-text-theme"></i> Ciudad:</strong> Medellín, Colombia</p>
            </div>

            <br />
            <button 
              onClick={() => navigate('/feed')} 
              className="w3-button w3-theme" 
              style={{ backgroundColor: '#2196F3', color: 'white', borderRadius: '4px', padding: '10px 20px' }}
            >
              <i className="fa fa-arrow-left"></i> Volver al Muro / Feed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}