"use client"
import { useParams } from "next/navigation";
import FormEditCustomer from "../../page";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id ?? 0;



  return (
    <FormEditCustomer id={id}/>
    );

}