'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

export default function AuthGuard({
  children,
  requiredRole,
}: {
  children: React.ReactNode
  requiredRole?: string
}) {
  const { usuario, loading  } = useAuth()
  const router = useRouter()  

  useEffect(() => {
    if (loading) return; // espera terminar de carregar

    if (!usuario) {
      router.replace('/login')
    } else if (requiredRole && usuario.role !== requiredRole) {
      router.replace('/unauthorized')
    }
    console.log("pode")
  }, [usuario])

  if (!usuario) return null // ou loading...

  return <>{children}</>
}
