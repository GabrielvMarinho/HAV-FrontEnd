"use client";

import searchPropertyById from "@/app/apiCalls/Property/searchPropertyById";
import FormEditProperty from "@/app/components/Forms/FormEditProperty";
import AuthGuard from "@/app/context/AuthGuard";
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ComponentPropertiesEdit from "./ComponentPropertiesEdit";

export default function page(){
 
    
    return (
        <>
            <AuthGuard requiredRole="ROLE_EDITOR"> 
                <ComponentPropertiesEdit/>
            </AuthGuard>
        </>
    )
}