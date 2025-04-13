"use client"
import searchPropertyById from "@/app/apiCalls/Property/searchPropertyById";
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
import FormEditCustomer from "@/app/components/Forms/FormEditCustomer";
import FormEditEditor from "@/app/components/Forms/FormEditEditor";

import { useParams } from "next/navigation";
import { useState } from "react";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;
  
    

  return (
    <FormEditEditor id={id} />
    );

}
