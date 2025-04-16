"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";
import FormEditEditor from "@/app/components/Forms/FormEditEditor";
import FormEditRealtor from "@/app/components/Forms/formEditRealtor";
import AuthGuard from "@/app/context/AuthGuard";

import { useParams } from "next/navigation";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
    <AuthGuard requiredRole="ROLE_ADMIN">
      <FormEditRealtor id={id}/>
    </AuthGuard>
    );

}
