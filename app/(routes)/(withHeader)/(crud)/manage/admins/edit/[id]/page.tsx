"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";

import { useParams } from "next/navigation";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
    <FormEditAdm id={id}/>
    );

}
