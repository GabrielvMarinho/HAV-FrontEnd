"use client"
import FormAddProperty from "@/app/components/Forms/FormAddProperty";
import { useSearchParams } from "next/navigation";

export default function page(){
    const searchParams = useSearchParams();  
    const searchParamsObject = Object.fromEntries(searchParams.entries());

    console.log(searchParamsObject.proprietor)
    console.log(searchParamsObject.realtors)
    console.log(searchParamsObject)
    return (
        <FormAddProperty 
            objectData = {searchParamsObject}
        />
    )
}