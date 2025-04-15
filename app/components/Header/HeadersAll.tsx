"use client"
import { useAuth } from "@/app/context/AuthContext";
import HeaderAdm from "./HeaderAdm";
import HeaderCustomer from "./HeaderCustomer";
import HeaderEditor from "./HeaderEditor";
import HeaderRealtor from "./HeaderRealtor";
import HeaderNotLogged from "./HeaderNotLogged";

export default function HeadersAll() {
  
  const { usuario, loading } = useAuth();
  console.log(loading)

  if (loading) {
    return null; // ou um spinner, esqueleto, etc.
  }

  console.log("asdasd")
  console.log(usuario.role)
  let header = <HeaderNotLogged/>
  if (usuario.role === "CUSTOMER") {
    header = <HeaderCustomer/>;
  } else if (usuario.role === "ADMIN") {
    header = <HeaderAdm />;
  } else if (usuario.role === "EDITOR") {
    header = <HeaderEditor />;
  } else if (usuario.role === "REALTOR") {
    header = <HeaderRealtor />;
  }
  console.log(header)
  return header;
}