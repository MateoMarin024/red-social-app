import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Login } from './components/Login';
import { Feed } from './components/Feed';
import { Profile } from './components/Profile';

// Componente para validar Rutas Restringidas (Nota 5.0)
function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLogged = localStorage.getItem('usuario');
  return isLogged ? children : <Navigate to="/login" />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route 
          path="/feed" 
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}