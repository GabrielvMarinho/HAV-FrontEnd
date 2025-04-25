import HeaderAdm from "@/app/components/Header/HeaderAdm"
import HeadersAll from "@/app/components/Header/HeadersAll"
import montserrat from "@/app/Fonts"
import findUserOnCookie from "@/app/utils/findUserOnCookie"
import { jwtDecode } from "jwt-decode"
import { cookies } from "next/headers"
import ThemeToggle from "../../components/Theme/ToggleTheme"
import InitTheme from "../../components/Theme/InitTheme"

import ChatBot from "@/app/components/Chatbot/ChatBot"
import Footer from "@/app/components/Footer/Footer"
import { ReduxProvider } from "@/app/redux/providers"


export const metadata = {
  title: 'Hav Imobiliária',
  description: 'Criado por Hav',
}
interface Usuario {
  // Define your user type based on your JWT structure
  id?: string;
  nome?: string;
  email?: string;
  role?: string;
  // Add other fields you expect in the token
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const usuario = await findUserOnCookie();

  return (
    <>
      <InitTheme />
      <HeadersAll usuario={usuario} />
      {usuario.role === "ROLE_CUSTOMER" &&
        <ChatBot/> 
      }
      <ReduxProvider>
        {children}
      </ReduxProvider>
      <Footer />
    </>
  );
}