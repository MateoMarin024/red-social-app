import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export function MessagesPage() {
  return (
    <>
      <Navbar />
      <div className="w3-container" style={{ maxWidth: '800px', marginTop: '100px', textAlign: 'center' }}>
        <h2>✉️ Mensajes Privados</h2>
        <p>Aquí se listarán las conversaciones con tus amigos de la red social.</p>
        <Link to="/" className="w3-button w3-blue" style={{ marginTop: '20px' }}>Volver al Feed</Link>
      </div>
    </>
  );
}