import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeftColumn } from './components/LeftColumn';
import { MiddleColumn } from './components/MiddleColumn';
import { RightColumn } from './components/RightColumn';
import { ProfilePage } from './pages/ProfilePage';
import { MessagesPage } from './pages/MessagesPage';
import { NotificationsPage } from './pages/NotificationsPage';

// Componente inteligente para el Login que fuerza la navegación al dar clic
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin(); // Activamos el estado de autenticación
    navigate('/', { replace: true }); // Forzamos el salto inmediato a la ruta principal
  };

  return (
    <div style={{ padding: '60px', textAlign: 'center', fontFamily: 'Arial', background: '#f4f4f4', height: '100vh' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '8px', display: 'inline-block', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <h2>🔒 Acceso Restringido - Red Social</h2>
        <p style={{ color: '#666', marginTop: '10px' }}>Debes iniciar sesión para acceder al feed principal.</p>
        <button 
          onClick={handleLoginClick} 
          style={{ marginTop: '20px', padding: '12px 24px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', background: '#2196F3', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Iniciar Sesión (Simulado)
        </button>
      </div>
    </div>
  );
}

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Componente wrapper para proteger rutas privadas
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Pública de Login */}
        <Route 
          path="/login" 
          element={<LoginScreen onLogin={() => setIsAuthenticated(true)} />} 
        />

        {/* Rutas Privadas Protegidas */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="w3-container" style={{ maxWidth: '1400px', marginTop: '80px' }}>
                  <div className="w3-row">
                    <LeftColumn />
                    <MiddleColumn />
                    <RightColumn />
                  </div>
                </div>
                <Footer />
              </>
            </ProtectedRoute>
          } 
        />
        
        <Route 
          path="/profile" 
          element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} 
        />
        <Route 
          path="/messages" 
          element={<ProtectedRoute><MessagesPage /></ProtectedRoute>} 
        />
        <Route 
          path="/notifications" 
          element={<ProtectedRoute><NotificationsPage /></ProtectedRoute>} 
        />

        {/* Cualquier otra ruta no existente redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;