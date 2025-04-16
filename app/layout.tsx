"use client"
import "./variables.css";
import Loader from "./components/IconsTSX/Loader"; // Importando o Loader
import montserrat from "@/app/Fonts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={montserrat.className}>
      <body>
          <Loader /> {/* Loader Global */}
          {children}
      </body>
    </html>
  );
}