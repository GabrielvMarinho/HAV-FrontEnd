"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";

import { useParams } from "next/navigation";

export default function WrappedPageEditCustomer() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
      <FormEditCustomer id={id}/>
    
    );

}
