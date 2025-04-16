'use client'

import { useEffect } from 'react'

export default function InitTheme() {
  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'lightPallete'
    document.documentElement.setAttribute('data-theme', saved)
  }, [])

  return null
}