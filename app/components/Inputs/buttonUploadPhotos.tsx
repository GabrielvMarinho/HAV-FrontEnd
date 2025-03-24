import MoreSignal from "../IconsTSX/MoreSignal"
import "./css/style.css";
import "@/app/variables.css"
import { useRef, useState } from "react"; 
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import ArrowBack from "../IconsTSX/ArrowBack";
import Trashcan from "../IconsTSX/Trashcan";

export default function ButtonUploadPhotos<T>({
    name,
    register,
    error
}: {
    name: keyof T;
    register?: UseFormRegister<T>;
    error?: FieldError;

}) {
    
    
    const [preview, setPreview] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevIndex = function(){
        
        setCurrentIndex(currentIndex-1)
        
    }
    const nextIndex = function(){

        setCurrentIndex(currentIndex+1)

    }
    const deleteIndex = function(){
        console.log(preview.length)
        if(preview.length>1){
            setPreview((prev) => prev.filter((_, i) => i !== currentIndex));
            if(currentIndex>0){
                setCurrentIndex(currentIndex-1)

            }

        }else{
            console.log("final")
            setPreview([])
        }

    }


    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;

        if (files) {
            
            Array.from(files).forEach((file) => {
              const reader = new FileReader();
        
              reader.onload = (e) => {
                if (e.target?.result) {
                  setPreview((prev) => [...prev, e.target!.result as string]); // Append to the state
                }
              };
        
              reader.readAsDataURL(file);
            });
        }



      
    };

    return (
        <>
                {preview.length > 0 ? 
                
                <>
                <button className={"trashcanPhoto"} onClick={deleteIndex}>
                    <Trashcan width={23} height={23} color="var(--box-white)"/></button>

                <button className={"photoArrow photoArrowLeft"}onClick={currentIndex>0?prevIndex:() =>{}}>
                    <ArrowBack width={23} height={23} color="var(--box-white)"/></button>
                <button className={"mirrored photoArrow photoArrowRight"} onClick={currentIndex<preview.length-1?nextIndex:() =>{}}>
                    <ArrowBack width={23} height={23} color="var(--box-white)"/></button>
                <img  src={preview[currentIndex]} alt="Preview" className="previewImg" /> 
                
                    
                    <div style={{display: "flex"}}>
                        {preview.slice(Math.max(0, Math.min(currentIndex, preview.length - 4)), Math.min(currentIndex + 4, preview.length)).map( (image, index) =>
                           <img onClick={() =>{setCurrentIndex(index)}} className={index+Math.max(0, Math.min(currentIndex, preview.length - 4))===currentIndex?"markedImage subPreviewImg":"subPreviewImg"} src={image}></img>

                        )
                        }
                    </div>

                </>

                : ""}

              
              <div className="buttonUploadPhotoIcon">
                <MoreSignal width={30} height={22} color="var(--box-white)"/>
              </div>
              <input className="buttonUploadPhoto" multiple type="file"  
              {...(register ? register(name) : {})} 
              onChange={handleFileChange}
              />

            
            {error && <p className="errorText">{error.message}</p>}

        </>
    );
}