"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditProprietor from "@/app/components/Forms/FormEditProprietor";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
      <AuthGuard requiredRole="ROLE_EDITOR"> 
        <FormEditProprietor id={id}/>
      </AuthGuard>
    );

}
