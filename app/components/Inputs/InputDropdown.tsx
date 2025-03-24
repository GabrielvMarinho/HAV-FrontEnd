"use client"
import SelectedStar from '../IconsTSX/SelectedStar';
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
    
    
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="label" htmlFor={id}>{text}</label>
            <select 
                name={name}
                id={id}
                
                {...(register ? register(name) : {})}

                onChange={(e) => {onChange?.(e.target.value), register ? register(name).onChange(e): {}, register ? register(name).onBlur(e):{}}} 
                defaultValue={defaultValue}

                className={`${size}InputDropdown inputDropdown labelDropdown ${error ? 'inputError' : ''}`}
            >
                <option value="" className='labelDropdown' selected disabled>Selecione Algo</option>
                {options.map(option => (
                    <option selected={defaultValue === option[0]} className="optionDropDown labelDropdown" value={option[0]} key={option[0]}>
                        {option[1].toUpperCase()}
                    </option>
                ))}
            </select>
            {error && <p className="errorText">{error.message}</p>}
        </div>
    );
}
