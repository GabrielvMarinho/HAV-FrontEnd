import './css/style.css';
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import { useEffect, useRef } from 'react';

export default function InputText<T extends FieldValues>({
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error,
    disabled = false,
}: {
    name: keyof T;
    size: string;
    text: string;
    placeholder: string;
    id: string;
    defaultValue?: any;
    register?: UseFormRegister<T>;
    error?: FieldError;
    disabled?: boolean;
}) {
    
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <input 
                id={id}
                type="text"
                name={name as string}
                {...(register ? register(name) : {})} 
                className={`${size}Input input ${disabled ? 'disabled-input' : ''}`}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
            />
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}