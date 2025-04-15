'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/app/context/AuthContext'

const roleHierarchy = ['ROLE_CUSTOMER', 'ROLE_REALTOR', 'ROLE_EDITOR', 'ROLE_ADMIN']

export default function AuthGuard({
  children,
  requiredRole,
}: {
  children: React.ReactNode
  requiredRole?: string
}) {
  const { usuario, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (loading) return

    if (!usuario) {
      router.replace('/login')
    } else if (
      requiredRole &&
      roleHierarchy.indexOf(usuario.role) < roleHierarchy.indexOf(requiredRole)
    ) {
      router.replace('/unauthorized')
    }
  }, [usuario, loading, requiredRole, router])

  if (!usuario || loading) return null // ou um loading spinner

  return <>{children}</>
}
