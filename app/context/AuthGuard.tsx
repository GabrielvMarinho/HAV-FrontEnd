import Cookies from 'js-cookie';
import ClientAuthGuard from './ClienteAuthGuard';
import findTokenOnCookie from '../utils/findTokenOnCookie';

export default async function AuthGuard({
  children,
  requiredRole 
}: {
  children: React.ReactNode;
  requiredRole?: string;
}) {
  
  const token = await findTokenOnCookie();

  return (
    <ClientAuthGuard 
      initialToken={token}
      requiredRole={requiredRole}
    >
      {children}
    </ClientAuthGuard>
  );
}