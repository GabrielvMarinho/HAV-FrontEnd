import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useRef, useState } from "react"; 
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";

export default function ButtonUploadPhoto<T>({
    name,
    register,
    error
}: {
    name: keyof T;
    register?: UseFormRegister<T>;
    error?: FieldError;

}) {
    
    
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

              
              <div className="buttonUploadPhotoIcon">
                <MoreSignal width={30} height={22} color="var(--box-red-pink)"/>
              </div>
              <input className="buttonUploadPhoto" type="file"  
              {...(register ? register(name) : {})} 
              onChange={handleFileChange}
              />

            
            {error && <p className="errorText">{error.message}</p>}

        </>
    );
}