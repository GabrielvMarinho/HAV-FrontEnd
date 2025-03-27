import "./variables.css";
import Loader from "./components/IconsTSX/Loader"; // Importando o Loader

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <Loader /> {/* Loader Global */}
        {children}
      </body>
    </html>
  );
}
