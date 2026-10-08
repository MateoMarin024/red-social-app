import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large" style={{ backgroundColor: '#2196F3', color: 'white' }}>
        <a onClick={() => navigate('/feed')} className="w3-bar-item w3-button w3-padding-large w3-theme-d4" style={{ backgroundColor: '#0d8aee', cursor: 'pointer' }}>
          <i className="fa fa-home w3-margin-right"></i>Beat Social
        </a>
        
        {/* Botón del planeta actualizado */}
        <a 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            navigate('/feed');
          }} 
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" 
          title="Inicio / Actualizar Feed" 
          style={{ cursor: 'pointer' }}
        >
          <i className="fa fa-globe"></i>
        </a>

        <a onClick={() => navigate('/profile')} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Perfil" style={{ cursor: 'pointer' }}>
          <i className="fa fa-user"></i>
        </a>
        
        <a onClick={() => alert('Bandeja de mensajes próximamente')} className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Mensajes" style={{ cursor: 'pointer' }}>
          <i className="fa fa-envelope"></i>
        </a>
        
        <a onClick={() => { localStorage.removeItem('usuario'); navigate('/login'); }} className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-red" title="Cerrar Sesión" style={{ cursor: 'pointer' }}>
          <i className="fa fa-sign-out"></i> Salir
        </a>
      </div>
    </div>
  );
}