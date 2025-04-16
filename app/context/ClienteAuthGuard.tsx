'use client';
// app/components/client-auth-guard.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';

const roleHierarchy = ['ROLE_CUSTOMER', 'ROLE_REALTOR', 'ROLE_EDITOR', 'ROLE_ADMIN'];

export default function ClientAuthGuard({
  children,
  initialToken,
  requiredRole
}: {
  children: React.ReactNode;
  initialToken?: string;
  requiredRole?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    
    if (!initialToken) {
      router.push('/login');
      return;
    }
    try {
      const decoded = jwtDecode(initialToken);
      const userRole = decoded.role;
      console.log(userRole)
      console.log(requiredRole)

      if (requiredRole && 
          roleHierarchy.indexOf(userRole) < roleHierarchy.indexOf(requiredRole)) {
        router.push('/unauthorized');
      }
    } catch (error) {
      console.log(error)
      router.push('/login');
    }
  }, [requiredRole, router, initialToken]);

  return <>{children}</>;
}