"use client"

import './css/style.css';
import { FieldError, UseFormRegister } from 'react-hook-form';

export default function InputDropdown<T>({
    name,
    options,
    text,
    id

}: {
    name: string;
    options: [string, string][];
    size: string;
    text: string;
    id: string;
    
}) {
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px" }}>
            <label className="label" htmlFor={id}>{text}</label>
            <select name={name} id={id} className="inputDropdown">
                <option value="" disabled selected>Selecione Algo</option>
                {options.map(([value, label]) => (
                    <option key={value} value={value}>{label.toUpperCase()}</option>
                ))}
            </select>
        </div>
    );
}