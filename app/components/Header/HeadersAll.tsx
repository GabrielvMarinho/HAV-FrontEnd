"use client"
import HeaderAdm from "./HeaderAdm";
import HeaderCustomer from "./HeaderCustomer";
import HeaderEditor from "./HeaderEditor";
import HeaderRealtor from "./HeaderRealtor";
import HeaderNotLogged from "./HeaderNotLogged";

export default function HeadersAll(props : {usuario :any}) {
  

  let header = <HeaderNotLogged/>
  if (props.usuario?.role === "ROLE_CUSTOMER") {
    header = <HeaderCustomer/>;
  } else if (props.usuario?.role === "ROLE_ADMIN") {
    header = <HeaderAdm />;
  } else if (props.usuario?.role === "ROLE_EDITOR") {
    header = <HeaderEditor />;
  } else if (props.usuario?.role === "ROLE_REALTOR") {
    header = <HeaderRealtor />;
  }
  return header;
}