"use client"
import FormAddProperty from "@/app/components/Forms/FormAddProperty";
import AuthGuard from "@/app/context/AuthGuard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function page(){
    const searchParams = useSearchParams();  
    const searchParamsObject = Object.fromEntries(searchParams.entries());
    
    
    return (
        <>
        <AuthGuard requiredRole="ROLE_EDITOR"> 
              <FormAddProperty 
                objectData = {searchParamsObject}
            />
        </AuthGuard>
        </>
        
    )
}