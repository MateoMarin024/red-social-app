import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function NotificationsPage() {
  return (
    <>
      <Navbar />
      <div className="w3-container" style={{ maxWidth: '800px', marginTop: '100px', textAlign: 'center' }}>
        <h2>🔔 Notificaciones</h2>
        <p>Aquí verás las alertas de likes, comentarios y solicitudes de amistad.</p>
        <Link to="/" className="w3-button w3-blue" style={{ marginTop: '20px' }}>Volver al Feed</Link>
      </div>
    </>
  );
}