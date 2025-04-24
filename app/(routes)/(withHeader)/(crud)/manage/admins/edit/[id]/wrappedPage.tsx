"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";

export default function WrappedPageEditAdm() {
  
  const params = useParams();
  
  const id = params.id ?? 0;


  return (
      <FormEditAdm id={id}/>
    );

}
