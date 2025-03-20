import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useRef, useState } from "react"; 

export default function ButtonUploadPhoto() {
    const fileInputRef = useRef<HTMLInputElement | null>(null); 
    
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => setPreview(e.target?.result as string);
        reader.readAsDataURL(file);
      }
    };

    return (
        <>
            {preview && <img src={preview} alt="Preview" className="previewImg" />}

            <input name = "file" ref={fileInputRef} type="file" style={{ display: "none" }} 
            onChange={handleFileChange}/> 
            <button type="button" className="buttonUploadPhoto" onClick={() => {
                fileInputRef.current?.click();
            }}>
                <MoreSignal width={16.5} height={34.5} color="var(--box-red-pink)" />
            </button>
        </>
    );
}