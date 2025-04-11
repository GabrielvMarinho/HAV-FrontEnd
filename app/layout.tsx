import "./variables.css";
import Loader from "./components/IconsTSX/Loader"; // Importando o Loader
import montserrat from "@/app/Fonts"
import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={montserrat.className}>
      <body>
        <AuthProvider>
          <Loader /> {/* Loader Global */}
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}