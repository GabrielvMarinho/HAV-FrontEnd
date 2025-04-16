'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ClientAuthGuard from './ClienteAuthGuard';
import findTokeOnCookie from '../utils/findTokenOnCookie';

export default function AuthGuard({
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