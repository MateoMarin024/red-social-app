import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const navigate = useNavigate();

  // Estado inicial con tus datos profesionales
  const [profile, setProfile] = useState({
    nombre: 'Mateo Marín',
    email: 'prueba123@gmail.com',
    ocupacion: 'Frontend Developer & Estudiante',
    ciudad: 'Medellín, Colombia'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(profile);
  const [successMsg, setSuccessMsg] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(tempProfile);
    setIsEditing(false);
    setSuccessMsg('¡Perfil actualizado con éxito!');
    setTimeout(() => setSuccessMsg(''), 3000);
  };

  return (
    <div className="w3-light-grey" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* Navbar Superior */}
      <div className="w3-top">
        <div className="w3-bar" style={{ backgroundColor: '#2196F3', color: 'white', padding: '0 20px' }}>
          <button onClick={() => navigate('/feed')} className="w3-bar-item w3-button" style={{ backgroundColor: 'transparent', border: 'none', color: 'white', cursor: 'pointer', fontSize: '18px', marginTop: '8px' }}>
            <i className="fa fa-arrow-left"></i> Volver al Muro
          </button>
        </div>
      </div>

      {/* Contenedor Principal */}
      <div className="w3-container" style={{ maxWidth: '600px', marginTop: '100px', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="w3-card w3-white w3-round w3-padding" style={{ padding: '30px' }}>
          <h2 style={{ color: '#1877f2', textAlign: 'center', marginBottom: '20px' }}>Mi Perfil Profesional 🚀</h2>

          {successMsg && <div style={{ background: '#e8f5e9', color: '#2e7d32', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center' }}>{successMsg}</div>}

          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <img src="https://www.w3schools.com/w3images/avatar2.png" className="w3-circle" style={{ height: '120px', width: '120px', border: '3px solid #2196F3' }} alt="Avatar" />
          </div>

          {!isEditing ? (
            <div>
              <div style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <strong style={{ color: '#555' }}>Nombre:</strong> <span style={{ float: 'right' }}>{profile.nombre}</span>
              </div>
              <div style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <strong style={{ color: '#555' }}>Correo:</strong> <span style={{ float: 'right' }}>{profile.email}</span>
              </div>
              <div style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <strong style={{ color: '#555' }}>Ocupación:</strong> <span style={{ float: 'right' }}>{profile.ocupacion}</span>
              </div>
              <div style={{ marginBottom: '25px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
                <strong style={{ color: '#555' }}>Ciudad:</strong> <span style={{ float: 'right' }}>{profile.ciudad}</span>
              </div>

              <button 
                onClick={() => { setTempProfile(profile); setIsEditing(true); }}
                style={{ width: '100%', backgroundColor: '#1877f2', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Editar Perfil
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave}>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre</label>
                <input 
                  type="text" 
                  value={tempProfile.nombre} 
                  onChange={(e) => setTempProfile({ ...tempProfile, nombre: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Correo</label>
                <input 
                  type="email" 
                  value={tempProfile.email} 
                  onChange={(e) => setTempProfile({ ...tempProfile, email: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ocupación</label>
                <input 
                  type="text" 
                  value={tempProfile.ocupacion} 
                  onChange={(e) => setTempProfile({ ...tempProfile, ocupacion: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  required
                />
              </div>

              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Ciudad</label>
                <input 
                  type="text" 
                  value={tempProfile.ciudad} 
                  onChange={(e) => setTempProfile({ ...tempProfile, ciudad: e.target.value })}
                  style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="submit" style={{ flex: 1, backgroundColor: '#42b72a', color: 'white', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Guardar Cambios
                </button>
                <button type="button" onClick={() => setIsEditing(false)} style={{ flex: 1, backgroundColor: '#e4e6eb', color: '#4b4f56', border: 'none', padding: '12px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
                  Cancelar
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}