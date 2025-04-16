import FormAddProperty from "@/app/components/Forms/FormAddProperty";
import AuthGuard from "@/app/context/AuthGuard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import ComponentPropertiesAdd from "./componentPropertiesAdd";

export default function page(){
    
    
    return (
        <>
        <AuthGuard requiredRole="ROLE_EDITOR"> 
            <ComponentPropertiesAdd/>
        </AuthGuard>
        </>
        
    )
}