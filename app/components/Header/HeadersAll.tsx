"use client"
import HeaderAdm from "./HeaderAdm";
import HeaderCustomer from "./HeaderCustomer";
import HeaderEditor from "./HeaderEditor";
import HeaderRealtor from "./HeaderRealtor";
import HeaderNotLogged from "./HeaderNotLogged";

export default function HeadersAll(props : {usuario? :any}) {
  



  let header = <HeaderNotLogged/>
  if (props.usuario?.role === "CUSTOMER") {
    header = <HeaderCustomer/>;
  } else if (props.usuario?.role === "ADMIN") {
    header = <HeaderAdm />;
  } else if (props.usuario?.role === "EDITOR") {
    header = <HeaderEditor />;
  } else if (props.usuario?.role === "REALTOR") {
    header = <HeaderRealtor />;
  }
  return header;
}