'use client';
// app/components/client-auth-guard.tsx
import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!initialToken) {
        router.push('/login');
        return;
      }
      try {
        const decoded = jwtDecode(initialToken);
        const userRole = decoded.role;

        if (requiredRole && 
            roleHierarchy.indexOf(userRole) < roleHierarchy.indexOf(requiredRole)) {
          router.push('/unauthorized');
          return;
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        router.push('/login');
      }
    };

    checkAuth();
  }, [requiredRole, router, initialToken]);

  if (isLoading) {
    return (
      <>
      </>
    );
  }

  return <>{children}</>;
}