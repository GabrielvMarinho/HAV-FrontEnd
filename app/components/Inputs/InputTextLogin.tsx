"use client"
import { useState } from 'react';
import './css/style.css';
import { FieldError, UseFormRegister } from "react-hook-form";
import PasswordValidator from '@/app/Validators/PasswordValidator';

export default function InputTextLogin<T>({
    password,
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error,
    icon,  // Prop para passar o ícone

}: {

    password?: boolean;
    name: keyof T;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    defaultValue?: any;
    register?: UseFormRegister<T>;
    error?: FieldError;
    icon?: React.ReactNode;  // Definindo o tipo para ícone

}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleSee = function(){
        console.log("asdas")
        setShowPassword(!showPassword)
    }
    return (
        <div className="inputContainer">
            <label className="labelLogin" htmlFor={id}>{text}</label>
            <div className="inputWrapperLogin">
                <input 
                    id={id}
                    type={password?showPassword?"text":"password":"text"}
                    name={name}
                    {...(register ? register(name) : {})} 
                    className={`${size}Input input`}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
                {icon && <div onClick={password?()=>{toggleSee()}:()=>{}}className={`inputIcon ${password?"pointer":""}`}>{icon}</div>} 
                
            </div>
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}