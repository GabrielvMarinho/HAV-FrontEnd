import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useRef } from "react"; 

export default function ButtonUploadPhoto() {
    const fileInputRef = useRef<HTMLInputElement | null>(null); 

    return (
        <>
            <input ref={fileInputRef} type="file" style={{ display: "none" }} 
            onChange={e =>{
                const file = e.target.files?.[0];
                console.log(file);
            }}/> 
            <button type="button" className="buttonUploadPhoto" onClick={() => {
                fileInputRef.current?.click();
            }}>
                <MoreSignal width={16.5} height={34.5} color="var(--box-red-pink)" />
            </button>
        </>
    );
}