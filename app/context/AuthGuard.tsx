// app/components/auth-wrapper.tsx

import { cookies } from 'next/headers';
import ClientAuthGuard from './ClienteAuthGuard';

export default async function AuthGuard({
  children,
  requiredRole 
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;
  return (
    <ClientAuthGuard 
      initialToken={token}
      requiredRole={requiredRole}
    >
      {children}
    </ClientAuthGuard>
  );
}