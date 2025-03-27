"use client"; // Importante para rodar no client-side
import { useEffect, useState } from "react";

export default function Loader() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true); // Mostrar loader se demorar mais de 500ms
    }, 500);

    window.addEventListener("load", () => {
      clearTimeout(timeout);
      setShowLoader(false); // Esconder loader quando a página carregar
    });

    return () => clearTimeout(timeout);
  }, []);

  if (!showLoader) return null; // Se o loader não precisar ser mostrado, retorna nada

  return (
    <div id="loader">
      <span className="carregando"></span>
    </div>
  );
}
