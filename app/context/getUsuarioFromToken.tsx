// app/lib/auth.js (Server-side utility function)
import { cookies } from 'next/headers';
import { jwtDecode } from "jwt-decode";

export function getUsuarioFromToken() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) return null;
  
  try {
    const decoded = jwtDecode(token);
    return {
      id: decoded.id,
      nome: decoded.nome,
      role: decoded.role,
    };
  } catch (err) {
    console.error('Token inválido', err);
    return null;
  }
}