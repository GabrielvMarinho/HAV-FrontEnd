"use client"
import { useAuth } from "@/app/context/AuthContext";
import HeaderAdm from "./HeaderAdm";
import HeaderCustomer from "./HeaderCustomer";
import HeaderEditor from "./HeaderEditor";
import HeaderRealtor from "./HeaderRealtor";

export default function HeadersAll() {
  
  const { usuario, loading } = useAuth();

  if (loading) {
    return null; // ou um spinner, esqueleto, etc.
  }

  if (!usuario) {
    return null; // ou um fallback caso o usuário não esteja logado
  }
  console.log(usuario.role)
  
  return (
    <>
      {usuario.role === "ROLE_ADMIN" && <HeaderAdm />}
      {usuario.role === "ROLE_CUSTOMER" && <HeaderCustomer />}
      {usuario.role === "ROLE_EDITOR" && <HeaderEditor />}
      {usuario.role === "ROLE_REALTOR" && <HeaderRealtor />}
    </>
  );
}