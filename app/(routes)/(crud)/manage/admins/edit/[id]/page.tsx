"use client"
import FormEditAdm from "@/app/components/Forms/FormEditAdm";
// app/property/[id]/page.tsx
import { useParams } from "next/navigation";

export default function PropertyPage() {
  
  const params = useParams();
  
  const id = params.id;

  return (
    <FormEditAdm/>
    );

}
