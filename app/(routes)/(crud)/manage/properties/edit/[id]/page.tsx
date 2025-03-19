"use client";

import FormEditProperty from "@/app/components/Forms/FormEditProperty";
import { useParams, useSearchParams } from "next/navigation";

export default function page(){
    const params = useParams();
    const id = params.id as string;
    const searchParams = useSearchParams();  
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    return (
        <>
        <FormEditProperty id ={id} objectData={searchParamsObject} />
        </>
    )
}