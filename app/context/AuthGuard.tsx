'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ClientAuthGuard from './ClienteAuthGuard';

export default function AuthGuard({
  children,
  requiredRole 
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    // Usando js-cookie para client-side
    const token = Cookies.get('token');
    setToken(token);
  }, []);
  
  return (
    <ClientAuthGuard 
      initialToken={token}
      requiredRole={requiredRole}
    >
      {children}
    </ClientAuthGuard>
  );
}