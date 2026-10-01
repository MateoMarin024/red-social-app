import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function ProfilePage() {
  return (
    <>
      <Navbar />
      <div className="w3-container" style={{ maxWidth: '800px', marginTop: '100px', textAlign: 'center' }}>
        <h2>👤 Mi Perfil de Usuario</h2>
        <p>Aquí puedes ver la información de tu cuenta, tus publicaciones y datos personales.</p>
        <Link to="/" className="w3-button w3-blue" style={{ marginTop: '20px' }}>Volver al Feed</Link>
      </div>
    </>
  );
}