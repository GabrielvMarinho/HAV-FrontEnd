'use client'

import { useEffect, useState } from "react"
import ToggleButton from "../Inputs/ToggleButton"

export default function ToggleTheme() {
  const changeTheme = () => {
    const html = document.documentElement
    const current = html.getAttribute('data-theme')
    const next = current === 'lightPallete' ? 'darkPallete' : 'lightPallete'
    html.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  }
  const toggled = localStorage.getItem('theme')==="darkPallete";
  
  
  
  return (
      <ToggleButton isToggled={toggled}onChange={changeTheme}/>
  )
}