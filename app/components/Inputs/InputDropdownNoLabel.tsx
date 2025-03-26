"use client"

import './css/style.css';
import { FieldError, UseFormRegister } from 'react-hook-form';

export default function inputDropdownNoLabel<T>({
    name,
    options,
    id,
    title

}: {
    name: string;
    options: [string, string][];
    size: string;
    title: string;
    id: string;
    
}) {
    return (
        <div style={{ width: "fit-content", display: "flex", flexDirection: "column", gap: "8px"}}>
            <select name={name} id={id} className="inputDropdownNoLabel">
                <option value="" disabled selected>{title}</option>
                {options.map(([value, label]) => (
                    <option key={value} value={value}>{label.toUpperCase()}</option>
                ))}
            </select>
        </div>
    );
}