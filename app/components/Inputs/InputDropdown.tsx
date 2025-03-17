"use client"
import './css/style.css';
import { FieldError, UseFormRegister } from 'react-hook-form';

export default function InputDropdown<T>({
    defaultValue,
    error,
    register,
    name,
    options,
    size,
    text,
    id,
    onChange 

}: {
    defaultValue?: string;
    error?: FieldError;
    register?: UseFormRegister<T>;
    name: string;
    options: [string, string][];
    size: string;
    text: string;
    id: string;
    onChange?: (value: string) => void; 

}) {
    console.log("joinville")
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="label" htmlFor={id}>{text}</label>
            <select 
                name={name}
                id={id}
                defaultValue={defaultValue===null || defaultValue===undefined?"":defaultValue}
                {...(register ? register(name) : {})}
                
                onChange={(e) => onChange?.(e.target.value)} 

                className={`${size}InputDropdown inputDropdown ${error ? 'inputError' : ''}`}
            >
                <option value="" disabled>Selecione Algo</option>
                {options.map(option => (
                    <option className="optionDropDown" value={option[0]} key={option[0]}>
                        {option[1].toUpperCase()}
                    </option>
                ))}
            </select>
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
