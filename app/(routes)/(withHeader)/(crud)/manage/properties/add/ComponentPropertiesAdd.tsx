"use client"
import FormAddProperty from "@/app/components/Forms/FormAddProperty";
import AuthGuard from "@/app/context/AuthGuard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function ComponentPropertiesAdd(){
    const searchParams = useSearchParams();  
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    
    
    return (
        <>
              <FormAddProperty 
                objectData = {searchParamsObject}
            />
        </>
        
    )
}