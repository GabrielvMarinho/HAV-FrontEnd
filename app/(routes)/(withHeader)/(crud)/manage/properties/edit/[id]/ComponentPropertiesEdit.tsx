"use client";

import searchPropertyById from "@/app/apiCalls/Property/searchPropertyById";
import FormEditProperty from "@/app/components/Forms/FormEditProperty";
import AuthGuard from "@/app/context/AuthGuard";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ComponentPropertiesEdit(){
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