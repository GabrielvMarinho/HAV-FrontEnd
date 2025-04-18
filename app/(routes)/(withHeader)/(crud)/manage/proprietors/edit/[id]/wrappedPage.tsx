"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditProprietor from "@/app/components/Forms/FormEditProprietor";

import { useParams } from "next/navigation";

export default function WrappedPageEditProprietor() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
        <FormEditProprietor id={id}/>
    );

}
