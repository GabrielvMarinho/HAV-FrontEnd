'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const start = performance.now(); // Marca o início

    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUsuario({
          id: decoded.id,
          nome: decoded.nome,
          role: decoded.role,
          
        });
        const end = performance.now(); // Marca o fim
        console.log(`Tempo para setar usuário: ${(end - start).toFixed(2)} ms`);

      } catch (err) {
        console.error('Token inválido', err);
        localStorage.removeItem('token');
      }
      setLoading(false)

    }
    
  }, []);


  return (
    <AuthContext.Provider value={{ usuario, setUsuario, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
