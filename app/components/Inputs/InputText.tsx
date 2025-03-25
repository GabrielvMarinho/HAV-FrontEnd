import './css/style.css';

import { NewUser } from "@/app/Validators/ProprietorValidator";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import { FieldError, UseFormRegister } from "react-hook-form";
import { NewUser } from "@/app/Validators/ProprietorValidator";
import { NewRealter } from '@/app/Validators/RealtorValidator';
import { NewEditor } from '@/app/Validators/EditorOrAdmValidator';
import { useEffect, useRef } from 'react';

export default function InputText<T>({
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error,
}: {
    name: keyof T;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    defaulValue?:any;
    register?: UseFormRegister<T>;
    error?: FieldError;
}) {



    
    
    
    
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <input 
                id={id}
                type="text"
                name={name}

                {...(register ? register(name) : {})} 
                className={`${size}Input input`}
                placeholder={placeholder}
                
            />
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
