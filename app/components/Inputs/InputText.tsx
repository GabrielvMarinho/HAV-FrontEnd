import './css/style.css';

import { FieldError, UseFormRegister } from "react-hook-form";
import { NewUser } from "@/app/Validators/ProprietorValidator";
import { NewRealter } from '@/app/Validators/RealterValidator';

// Agrupar as interfaces com uma união de tipos
type InputTextProps = {
    name: keyof (NewUser & NewRealter); // Chave que pode ser tanto de NewUser quanto de NewRealter
    size: string;
    text: string;
    placeholder: string;
    id: string;
    register?: UseFormRegister<NewUser | NewRealter>;
    error?: FieldError;
};

export default function InputText({
    name,
    size,
    text,
    placeholder,
    id,
    register,
    error
}: InputTextProps) {
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <input 
                id={id}
                type="text"
                className={`${size}Input input`}
                placeholder={placeholder}
                {...(register ? register(name) : {})} 
            />
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
