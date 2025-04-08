
"use client"
import ArrowBack from "../IconsTSX/ArrowBack";
import { useRouter } from "next/navigation";

export default function BackPage(){
    
    const router = useRouter();
    const BackAPoint = function(){
        router.back(); 
    }

    return(
        <div onClick={BackAPoint} style={{display: "flex", justifyContent:"center", alignItems:"center", marginRight:"10px"}}>
            <ArrowBack width={35} height={35} color="var(--text--mid-dark-red)"/>    
        </div>

    );
}