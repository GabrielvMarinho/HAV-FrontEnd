import './css/style.css';

import { NewUser } from "@/app/Validators/ProprietorValidator";
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import { FieldError, UseFormRegister } from "react-hook-form";
import { NewUser } from "@/app/Validators/ProprietorValidator";
import { NewRealter } from '@/app/Validators/RealterValidator';
import { NewEditor } from '@/app/Validators/EditorOrAdmValidator';

export default function InputText<T>({
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error
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
                defaultValue={defaultValue}
                type="text"
                name={name}
                className={`${size}Input input`}
                placeholder={placeholder}
                {...(register ? register(name) : {})} 
            />
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
