import './css/style.css';

import { NewUser } from "@/app/Validators/ProprietorValidator";
import { FieldError, UseFormRegister } from "react-hook-form";

export default function InputText({
    name,
    size,
    text,
    placeholder,
    id,
    register,
    error
}: {
    name: keyof NewUser;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    register?: UseFormRegister<NewUser>;
    error?: FieldError;
}) {
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <input 
                id={id}
                type="text"
                className={`${size}Input input`}
                placeholder={placeholder}
                {...(register ? register(name) : {})} // Garante que register seja uma função válida
            />
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
