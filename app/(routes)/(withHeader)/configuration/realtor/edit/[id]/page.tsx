"use client"

import FormEditRealtor from "../../page";
import { useParams } from "next/navigation";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
    <FormEditRealtor id={id}/>
    );

}
