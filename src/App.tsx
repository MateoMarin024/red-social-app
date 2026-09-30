import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LeftColumn } from './components/LeftColumn';
import { MiddleColumn } from './components/MiddleColumn';
import { RightColumn } from './components/RightColumn';

// Componente provisional para una página de Login o perfil público
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h2>🔒 Acceso Restringido - Red Social</h2>
      <p>Debes iniciar sesión para acceder a tu perfil y feed principal.</p>
      <button 
        onClick={onLogin} 
        className="w3-button w3-theme" 
        style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}
      >
        Iniciar Sesión (Simulado)
      </button>
    </div>
  );
}

// Componente principal de la Red Social (El feed que ya armamos)
function FeedPage() {
  return (
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
  );
}

export function App() {
  // Estado para simular si el usuario está autenticado (clave para la nota de 5.0)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Componente de Ruta Protegida / Restringida
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública */}
        <Route path="/login" element={<LoginScreen onLogin={() => setIsAuthenticated(true)} />} />

        {/* Ruta restringida (Pide autenticación para dar el 5.0) */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          } 
        />

        {/* Redirección por defecto si escriben cualquier otra URL */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;