import './css/style.css';
import { FieldError, UseFormRegister, FieldValues } from "react-hook-form";
import { useEffect, useRef } from 'react';

export default function InputTextArea<T extends FieldValues>({
    name,
    size,
    text,
    placeholder,
    defaultValue,
    id,
    register,
    error,
    disabled = false,
    rows,

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
    rows: number;


}) {



    
    
    
    
    return (
        <div className="inputContainer">
            <label className="label" htmlFor={id}>{text}</label>
            <textarea 
                rows={rows}
                id={id}
                name={name as string}

                {...(register ? register(name) : {})} 
                className={`${size}Input input ${disabled ? 'disabled-input' : ''}`}
                placeholder={placeholder}
                disabled={disabled}
                defaultValue={defaultValue}
            />
            {error && <p className="errorTextArea">{error.message}</p>}

        </div>
                   
                    
    );
}