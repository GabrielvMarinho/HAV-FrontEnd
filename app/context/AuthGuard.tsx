// app/components/auth-wrapper.tsx
import { cookies } from 'next/headers';
import ClientAuthGuard from './ClienteAuthGuard';
import findTokeOnCookie from '../utils/findTokenOnCookie';

export default async function AuthGuard({
  children,
  requiredRole 
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  
  const token = findTokeOnCookie();
  return (
    <ClientAuthGuard 
      initialToken={token}
      requiredRole={requiredRole}
    >
      {children}
    </ClientAuthGuard>
  );
}