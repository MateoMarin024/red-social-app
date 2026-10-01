import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          {/* Botón para abrir el menú en pantallas pequeñas */}
          <button 
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
          >
            <i className="fa fa-bars"></i>
          </button>

          {/* Logo / Inicio */}
          <Link to="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </Link>

          {/* Feed / Noticias */}
          <Link to="/" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="News">
            <i className="fa fa-globe"></i>
          </Link>

          {/* Perfil */}
          <Link to="/profile" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Account Settings">
            <i className="fa fa-user"></i>
          </Link>

          {/* Mensajes */}
          <Link to="/messages" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white" title="Messages">
            <i className="fa fa-envelope"></i>
          </Link>

          {/* Notificaciones (con su menú desplegable de W3.CSS) */}
          <div className="w3-dropdown-hover w3-hide-small">
            <Link to="/notifications" className="w3-button w3-padding-large" title="Notifications" style={{ textDecoration: 'none' }}>
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </Link>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: '300px' }}>
              <Link to="/notifications" className="w3-bar-item w3-button">One new friend request</Link>
              <Link to="/notifications" className="w3-bar-item w3-button">John Doe posted on your wall</Link>
              <Link to="/notifications" className="w3-bar-item w3-button">Jane likes your post</Link>
            </div>
          </div>

          {/* Mi Cuenta / Perfil rápido */}
          <Link to="/profile" className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white" title="My Account">
            <img src="https://www.w3schools.com//w3images/avatar2.png" className="w3-circle" style={{ height: '23px', width: '23px' }} alt="Avatar" />
          </Link>
        </div>
      </div>

      {/* Navbar para pantallas pequeñas (móviles / responsive) */}
      <div id="navDemo" className={`w3-bar-block w3-theme-d2 w3-hide-large w3-hide-medium w3-large ${isNavOpen ? 'w3-show' : 'w3-hide'}`}>
        <Link to="/" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsNavOpen(false)}>Inicio (Feed)</Link>
        <Link to="/profile" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsNavOpen(false)}>Mi Perfil</Link>
        <Link to="/messages" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsNavOpen(false)}>Mensajes</Link>
        <Link to="/notifications" className="w3-bar-item w3-button w3-padding-large" onClick={() => setIsNavOpen(false)}>Notificaciones</Link>
      </div>
    </>
  );
}