
"use client"
import { useState } from 'react';
import './css/style.css';

export default function InputDropdown(props: {options :[string, string][], size :string, text:string, id :string}){
    const [option, setOption] = useState("");

    return(
        <div style={{display: "flex", flexDirection: "column", gap:"8px"}}>
            <label className="label">{props.text}</label>
            <select className={props.size+"InputDropdown inputDropdown"} onChange={(e) => {setOption(e.target.value)}}>

                <option value="" disabled selected>Selecione Algo</option>

                {props.options.map(option =>
                    <option className="optionDropDown" value = {option[0].toUpperCase()} key={option[1].toUpperCase()}>{option[1].toUpperCase()}</option> 
                )}
            </select>
        </div>
    );
}